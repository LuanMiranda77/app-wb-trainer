/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, View } from 'react-native';
import { Contant } from './contant';
import { Footer } from './footer';
import { HeaderNavBar } from './headerNavBar';

export function LayoutApp() : JSX.Element{
    return (
        <>
            <HeaderNavBar/>
            {/* <Contant/> */}
            <Footer />
        </>
    );
}
