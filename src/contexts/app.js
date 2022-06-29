import React, { useState, createContext, useContext, useEffect } from 'react';
import firebase from '../services/firebaseConnection';
import { AuthContext } from './auth';

export const AppContext = createContext({})

function AppProvider({ children }){
    // const [beer, setBeer] = useState([
    //     {key:0, image:"https://i.ibb.co/xmqzfxX/Img-Bg-Ofe-3.png", title: "[Novo] Pilsen Premium", desc: "Mas pensa num trem bão...",
    //     descplus:". Cevada 7dias dentro de barril cervejeiro;\n. 6% de álcool;\n. Aromas amazônicos;\n. Frescor da Pilsen;",
    //      valor: 12.99},//0
    //     {key:1, image:"https://i.ibb.co/gvjtd9B/ImgBgOfe.png",title: "[Novo] Ipa", desc: "Precisa apenas de um gole",
    //     descplus:". Cevada 7dias dentro de barril cervejeiro;\n. 6% de álcool;\n. Aromas amazônicos;\n. Frescor da Pilsen;",
    //      valor: 19.99},//1
    //     {key:2, image:"https://i.ibb.co/MsFQqts/Img-Bg-Ofe-1.png",title: "Pilsen Gold", desc: "Tome e nunca mais esqueça!", 
    //     descplus:". Cevada 7dias dentro de barril cervejeiro;\n. 6% de álcool;\n. Aromas amazônicos;\n. Frescor da Pilsen;",
    //      valor: 14.99},//2
    //     {key:3, image:"https://i.ibb.co/jHyHwLY/Img-Bg-Ofe-2.png",title: "Carioquinha", desc: "Ótima com salgadinhos",
    //     descplus:". Cevada 7dias dentro de barril cervejeiro;\n. 6% de álcool;\n. Aromas amazônicos;\n. Frescor da Pilsen;",
    //      valor: 22.99},//3
    // ]);

    const { user } = useContext(AuthContext);    
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

   


    return(
      <AppContext.Provider value={{ beer, stockA, stockI }}>
        {children}
      </AppContext.Provider>
    );
}

export default AppProvider;