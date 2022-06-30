import React, { useState, createContext, useEffect } from 'react';
import firebase from '../services/firebaseConnection';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext({})

function AuthProvider({ children }){
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [loadingAuth, setLoadingAuth] = useState(false);

    //Funcao para validar adm//Adicionar email tia//Arrumar aqui
    // useEffect(()=>{
    //     async function searchAdm(){
    //         let email = user.email;
    //         if(email == "alberto.matheus21@gmail.com"){
    //             setAdm(true);
    //         }
    //         else{
    //             setAdm(false);
    //         }
    //     }
    //     searchAdm();
    // }, []);

    //Funcao para percistencia
    useEffect(() =>{
        async function loadStorage(){
            const storageUser = await AsyncStorage.getItem('Auth_user');

            if(storageUser){
                setUser(JSON.parse(storageUser));
                setLoading(false);
            }
            setLoading(false);
        }
        loadStorage();
    }, [])

    //Funcao para logar o usuario
    async function signIn(email, password) {
        setLoadingAuth(true);
        await firebase.auth().signInWithEmailAndPassword(email, password)
        .then(async (value) =>{
            let uid = value.user.uid;
            await firebase.database().ref('users').child(uid).once('value')
            .then((snapshot)=>{
                let data = {
                    uid: uid,
                    name: snapshot.val().name,
                    email: value.user.email,
                    image: snapshot.val().image,
                    useType: snapshot.val().useType,
                    zap: snapshot.val().zap,
                };
                setUser(data);
                storageUser(data);
                setLoadingAuth(false);
            })
        })
        .catch((error) => {
            alert(error.code);
            setLoadingAuth(true);
        })
    }

    //Cadastrar usuario
    async function signUp(email, password, name, zap, image){
        setLoadingAuth(true);
        await firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(async (value) =>{

            let uid = value.user.uid;

            if(email == "alberto.matheus@hotmail.com"){
                await firebase.database().ref('users').child(uid).set({                
                    name: name,
                    zap: zap,
                    image: image,
                    useType: "Administrador",
                })
                .then(()=>{
                    let data = {
                        uid: uid,
                        name: name,
                        email: value.user.email,
                        zap: zap,
                        image: image,
                        useType: "Administrador",
                    };
                    setUser(data);
                    storageUser(data);
                    setLoadingAuth(false);
                })
            }else{
                await firebase.database().ref('users').child(uid).set({                
                    name: name,
                    zap: zap,
                    image: image,
                    useType: "Normal",
                })
                .then(()=>{
                    let data = {
                        uid: uid,
                        name: name,
                        email: value.user.email,
                        zap: zap,
                        image: image,
                        useType: "Normal",
                    };
                    setUser(data);
                    storageUser(data);
                    setLoadingAuth(false);
                })
            }    
        })
        .catch( (error) => {
            if(error.code === 'auth/weak-password'){
                alert('Sua senha deve ter pelo menos 6 caracteres');
                setLoadingAuth(false);
                return;
            }
            if(error.code === 'auth/invalid-email'){
                alert('Email invalido');
                setLoadingAuth(false);
                return;
            }else{
                alert('Ops algo deu errado!');
                setLoadingAuth(false);
                return;
            }      
        })
    }

    async function storageUser(data){
        await AsyncStorage.setItem('Auth_user', JSON.stringify(data));
    }

    //Sair
    async function signOut(){        
        await firebase.auth().signOut();
        await AsyncStorage.clear()
        .then( () => {
            setUser(null);
        })
    }

    return(
        <AuthContext.Provider value={{ signed: !!user, user, loading, loadingAuth, signUp, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;