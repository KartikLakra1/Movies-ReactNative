import { View, Text, ImageBackground, Image } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { images } from '@/constants/images'
import { icons } from '@/constants/icons'

const TabIcon = ({focused , icon , title} :  any) => {
    return (<ImageBackground source={images.highlight} className='flex flex-row w-full flex-1 min-h-14 min-w-[100] mt-4 justify-center items-center rounded-full overflow-hidden'>
        <Image source={icon} tintColor={"#151312"} className='size-5'/>
         <Text className='text-secondary text-base font-semibold'>{title}</Text>                    
    </ImageBackground>
    )
}

const _layout = () => {
    

  return (
    <Tabs>
        <Tabs.Screen 
            name='index'
            options={{
                title: "Home",
                headerShown : false,
                tabBarIcon : ({focused})=>(
                    <TabIcon 
                        focused={focused}
                        icon = {icons.home}
                        title = "Home"
                    />
                )
            }}
        />

<Tabs.Screen 
            name='saved'
            options={{
                title: "saved",
                headerShown : false,
                tabBarIcon : ({focused})=>(
                    <TabIcon 
                    focused={focused}
                    icon = {icons.save}
                    title = "Saved"
                    />
                )
            }}
        />

<Tabs.Screen 
            name='search'
            options={{
                title: "search",
                headerShown : false,
                tabBarIcon : ({focused})=>(
                    <TabIcon 
                    focused={focused}
                    icon = {icons.search}
                    title = "Search"
                    />
                )
            }}
        />

<Tabs.Screen 
            name='profile'
            options={{
                title: "profile",
                headerShown : false,
                tabBarIcon : ({focused})=>(
                    <TabIcon 
                    focused={focused}
                        icon = {icons.person}
                        title = "Profile"
                    />
                )
            }}
        />
    </Tabs>
  )
}

export default _layout