import React, { useState, createContext, useContext, useEffect } from 'react';
import firebase from '../services/firebaseConnection';
import { AuthContext } from './auth';

export const AppContext = createContext({})

function AppProvider({ children }){
  const [stockA, setStockA] = useState([]);
  const [stockI, setStockI] = useState([]);
  const [reservado, setReservado] = useState(null);
  const [reservList, setReservList] = useState(null);
  const [beer, setBeer] = useState(null);
  const { user } = useContext(AuthContext);   
  const uid = user && user.uid;

    //Cria beer//Arrumar para pós cadastro zerar campos
    async function addBeer(image, title, desc, valor, isAtiva) {
      let key = firebase.database().ref('beer').push().key;
      await firebase.database().ref('beer').child(key).set({
        image:image,
        title:title,
        desc:desc,
        valor:parseFloat(valor),
        ativa:isAtiva,
      }).then(()=>{
        let data = {
          image:image,
          title:title,
          desc:desc,
          valor:valor,
          ativa:isAtiva,
        };
        setBeer(data);
      });
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

  //Criete/update Tabela de Reservas/REFAZER O COD PARA QUE FUNCIONE
  async function resv(quant, obs, title, image, keyBeer) {
    const bid = keyBeer;

    //Cria uma reserva nova 
    let key =  firebase.database().ref('reserva').child(uid).child(bid).push().key;
    firebase.database().ref('reserva').child(uid).child(bid).child(key).set({
      image: image,
      title: title,
      quant:quant,
      obs:obs,
    }).then(()=>{
      let data = {
        key: key,
        image: image,
        obs: obs,
        title: title,
        quant: quant,
      };
      setReservado(data);
    })
    .catch((error) => {
      alert(error.code);
  })

  }

  //Lista Reservas
  useEffect(()=>{
    async function loadResv(){
        setReservList([]);

        forEach((reserva) => {
          let list = {
            key: reserva.val().key,
            image: reserva.val().image,
            obs: reserva.val().obs,
            title: reserva.val().title,
            quant: reserva.val().quant,
          };
          
          setReservList(oldArray => [...oldArray, list].reverse());
        })
    }
    loadResv();
  },[]);  

  //Criete Tabela Opine
  async function opine(nameBeer, opinion, quantStar){
    const uid = user.uid;
    let key = await(await firebase.database().ref('opine').child(uid).push()).key;
    await firebase.database().ref('opine').child(uid).child(key).set({
      nameBeer: nameBeer,
      opinion: opinion,
      quantStar: quantStar,
    })
  }

  return(
    <AppContext.Provider value={{ beer, stockA, stockI, reservado, reservList, addBeer, removBeer, resv, opine }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;