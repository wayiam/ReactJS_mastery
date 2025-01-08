
import { useState, createContext } from 'react';
import Header from './BasicComponents/Header';
import Footer from './BasicComponents/Footer';
import MainComponent from './BasicComponents/MainContent';
import WelcomeMsg from './BasicComponents/WelcomeMsg';
import { JSXrules } from './BasicComponents/JSXrules';
import DynamicContent from './BasicComponents/DynamicContent';
import ProductInfo from './BasicComponents/ProductInfo';
import ListInReact from './BasicComponents/ListInReact';
import { PropsInReact } from './BasicComponents/PropsInReact';
import { Card, CardList } from './BasicComponents/Card';
import Weather from './BasicComponents/Weather';
import UserStatus from './BasicComponents/UserStatus';
import { Greeting } from './BasicComponents/Greeting';
import StyleCard from './BasicComponents/StyleCard';
import ProfileCard from './BasicComponents/ProfileCard';
import IconComponent from './BasicComponents/IconComponent';
import Button from './BasicComponents/Button';
import Basics from './BasicComponents/Basics';
import Counter from './StatePropsComponents/Counter';
import ToDoList from './StatePropsComponents/ToDoList';
import Profile from './StatePropsComponents/Profile';
import ShoppingList from './StatePropsComponents/ShoppingList';
import PopupCopied from './StatePropsComponents/PopupCopied';
import CopyInput from './StatePropsComponents/CopyInput';
import BasicEffect from './Hooks/BasicEffect';
import { CounterEffect } from './Hooks/CounterEffect';
import { FetchDataEffect } from './Hooks/FetchDataEffect';
import Switcher from './Hooks/Switcher';
import ComponentA from './PropDrilling/ComponentA';













export const Data = createContext();
export const AnotherData = createContext();
function App() {
  const name = "John"
  const age = 27;

  return (
    <>
      {/* <Basics/> */}
      {/* <Counter/> */}
      {/* <ToDoList/>
      <Profile/> 
      <ShoppingList /> */}
      {/* <CopyInput/> */}
      {/* <BasicEffect/> */}
      {/* <CounterEffect/> */}
      {/* <Switcher/> */}
      <FetchDataEffect/>
      {/* <AnotherData.Provider value={age}>
      <Data.Provider value={name}>
        <ComponentA />
      </Data.Provider>
      </AnotherData.Provider> */}
    </>
  )
}

export default App
