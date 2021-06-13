import React, { Component } from 'react'
import { AppRegistry, ScrollView, StyleSheet, Text, View } from 'react-native'
import { Divider } from 'react-native-elements';
import Swiper from 'react-native-swiper';
import DateComponent from './DateComponent';
import PieceOfNews from './PieceOfNews';

const NewsSwiper = (props) => {
    return (
        <Swiper  showsButtons={false} loop={false} showsPagination={false}>
            
                 {props.infoTypes.map((type,index)=>
                <ScrollView  key={index}>
                <DateComponent dayName={type.Name}/>
                {
                    type.News.map(
                    	(piece,index)=>
                    <>
                    <PieceOfNews header ={piece.Header}></PieceOfNews>
                    <Divider/>
                	</>)
            	}
            </ScrollView>)}
        </Swiper>
        
    );
};

export default NewsSwiper;