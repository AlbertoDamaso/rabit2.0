import React, { useState, createContext, useContext, useEffect } from 'react';
import firebase from '../services/firebaseConnection';
import { AuthContext } from './auth';

export const AppContext = createContext({})

function AppProvider({ children }){

    const [stockA, setStockA] = useState([]);
    const [stockI, setStockI] = useState([]);
    
    //Cria beer
    async function beer(image, title, desc, valor, isAtiva) {
      let key = firebase.database().ref('beer').push().key;
      await(await firebase.database().ref('beer').child(key).set({
        image:image,
        title:title,
        desc:desc,
        valor:parseFloat(valor),
        ativa:isAtiva,
      }));
    }

    //Lista beer ativos
    useEffect(()=>{
      async function loadListA(){
        await firebase.database().ref('beer')
        .limitToLast(20)
        .on('value', (snapshot)=>{
          setStockA([]);

          snapshot.forEach((children) =>{
            if(children.val().ativa == true){
              let list ={
                key: children.key,
                image: children.val().image,
                title: children.val().title,
                desc: children.val().desc,
                valor: children.val().valor,
                ativa: children.val().ativa,
              };

              setStockA(oldArray => [...oldArray, list].reverse());
            }
          })
        })
      }
      loadListA();
    },[]);

  //Lista beer inativos
  useEffect(()=>{
    async function loadListI(){
      await firebase.database().ref('beer')
      .limitToLast(20)
      .on('value', (snapshot)=>{
        setStockI([]);

        snapshot.forEach((children) =>{
          if(children.val().ativa == false){
            let list ={
              key: children.key,
              image: children.val().image,
              title: children.val().title,
              desc: children.val().desc,
              valor: children.val().valor,
              ativa: children.val().ativa,
            };

            setStockI(oldArray => [...oldArray, list].reverse());
          }
        })
      })
    }
    loadListI();
  },[]);    

  //Remover beer
  async function removBeer(data){
    await firebase.database().ref('beer').child(data.key).remove()
  } 

    return(
      <AppContext.Provider value={{ beer, stockA, stockI, removBeer }}>
        {children}
      </AppContext.Provider>
    );
}

export default AppProvider;