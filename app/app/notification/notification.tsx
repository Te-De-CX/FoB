import { View, Text, Image } from 'react-native'
import React from 'react'

const Notification = () => {

    const notifications = [
        {
            id:1,
            text: "You got 10 new review reply",
            imagesrc: ""
        },
        {
            id:2,
            text: "Your video submission is approved!",
            imagesrc: ""
        },
        {
            id:3,
            text: "Try something new! We have curated the ...",
            imagesrc: ""
        }
    ]

  return (
    <>
         <View>
            <Text>Notification</Text>
        </View>
        <View>
            {
                notifications.map(notify => (
                    <View key={notify.id}>
                        <Image />
                        <Text>{notify.text}</Text>
                    </View>
                ))
            }
        </View>
    </>
  )
}

export default Notification