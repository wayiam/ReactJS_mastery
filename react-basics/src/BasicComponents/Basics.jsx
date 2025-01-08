import React from 'react'
import Header from './Header'
import MainComponent from './MainContent'
import { JSXrules } from './JSXrules'
import WelcomeMsg from './WelcomeMsg'
import Footer from './Footer'
import DynamicContent from './DynamicContent'
import ProductInfo from './ProductInfo'
import ListInReact from './ListInReact'
import { PropsInReact } from './PropsInReact'
import { CardList } from './Card'
import Weather from './Weather' 
import UserStatus from './UserStatus'
import { Greeting } from './Greeting'
import StyleCard from './StyleCard'
import ProfileCard from './ProfileCard'
import IconComponent from './IconComponent'
import Button from './Button'


function Basics() {
    return (
        <>
            <Header/>
            <MainComponent />
            <JSXrules />
            <WelcomeMsg />
            <Footer />
            <DynamicContent />
            <ProductInfo />
            <ListInReact />
            <PropsInReact />
            <CardList />
            <Weather temperature="24" />
            <UserStatus loggedIn={true} isAdmin={false} />
            <Greeting timeofDay={"Afternoon"} />
            <StyleCard />
            <ProfileCard />
            <IconComponent />
            <Button /></>
    )
}

export default Basics