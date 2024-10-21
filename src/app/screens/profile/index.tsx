import { useEffect, useId, useState, useRef } from "react";
import { Text, View, SectionList } from "react-native";

import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";

import { styles } from "./styles";

import { Contact, ContactProps } from "@/app/components/contact";
import { Avatar } from "@/app/components/avatar";
import { Button } from "@/app/components/button";

import { dataInfo } from '@/utils/data'

type SectionListDataProps = {
  title: string;
  data: ContactProps[]
}

type Props = {
  id: string;
  name: string,
  image?: string | null,
}

export function Profile() {
  const [contacts, setContacts] = useState<SectionListDataProps[]>([])
  const [contact, setContact] = useState<Props>()

  const bottomSheetRef = useRef<BottomSheet>(null)

  const handleBottomSheetOpen = () => bottomSheetRef.current?.expand()
  const handleBottomSheetClose = () => bottomSheetRef.current?.snapToIndex(0)

  function handleOpenDetails(id: string) {
    setContact(dataInfo.find((item) => item.id === id))
    handleBottomSheetOpen()
  }

  async function fetchContacts() {
    try {
      const data = dataInfo;
      const list = data.map((contact) => ({
        id: contact.id ?? useId(),
        name: contact.name,
        image: contact.image
      })).reduce<SectionListDataProps[]>((acc: any, item) => {
        const firstLetter = item.name[0].toUpperCase()

        const existingEntry = acc.find((entry: SectionListDataProps) =>
          entry.title === firstLetter)

        if (existingEntry) {
          existingEntry.data.push(item)
        } else {
          acc.push({ title: firstLetter, data: [item] })
        }

        return acc
      }, [])

      setContacts(list)
      setContact(data[0])
    } catch (e) { console.log(e) }
  }

  useEffect(() => {
    fetchContacts()
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>PROFILE</Text>
      </View>

      <SectionList
        sections={contacts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Contact contact={item} onPress={() => handleOpenDetails(item.id)} />
        )}
      />

      {contact &&
        <BottomSheet ref={bottomSheetRef} snapPoints={[0.01, 300]} >
          <BottomSheetView>
            <View style={styles.bottomSheetContent} >
              <Avatar name={contact.name} variant="large" />

              <Text style={styles.contactName}>{contact.name}</Text>

              <Button title="Fechar" onPress={handleBottomSheetClose} />
            </View>
          </BottomSheetView>
        </BottomSheet>
      }
    </View>
  )
}
