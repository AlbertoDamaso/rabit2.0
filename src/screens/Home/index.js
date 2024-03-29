import React, { useContext } from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
} from 'react-native';
import { ScrollView } from 'react-native-virtualized-view';

import imgBgHeader from '../../assets/bg.png';
import { AreaEmp } from '../../components/AreaEmp';
import { Background } from '../../components/Background';
import { BtnDrawer } from '../../components/BtnDrawer';
import { ListOfertas } from '../../components/ListOfertas';
import { ListOfertas2 } from '../../components/ListOfertas2';
import { AppContext } from '../../contexts/app';
import { styles } from './styles';

export function Home() {

  const { stockA, stockI } = useContext(AppContext);

  return (
    <Background>      
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View>
            <Image
              source={imgBgHeader}
              style={styles.imgBgHeader}
            />
            <BtnDrawer/>
            {/* <View style={styles.areaShare}>
              <BtnShare/>
            </View> */}
          </View>

          <View>
            <AreaEmp title={"Rabit - Cervejas Artesanais"}/>
          </View>

          <View>
            <Text style={styles.title}>
              Ativas no estoque
            </Text>

            <ListOfertas
              data={stockA}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />  

            <Text style={styles.title}>
              Fora de estoque
            </Text>
            <ListOfertas2
              data={stockI}
              showsVerticalScrollIndicator={false}
            />           
          </View>

        </ScrollView>
      </SafeAreaView>
    </Background>
  );
}