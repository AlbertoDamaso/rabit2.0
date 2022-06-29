import React, { useState, createContext, useContext } from 'react';
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
    
    //Tabela de Cervejas Fixas
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
   


    return(
      <AppContext.Provider value={{ beer }}>
        {children}
      </AppContext.Provider>
    );
}

export default AppProvider;