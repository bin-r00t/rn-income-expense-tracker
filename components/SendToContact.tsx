import { View, Text, ScrollView, ImageBackground } from "react-native";
import Section from "./ui/Section";
import { useState } from "react";

export default function SendToContact() {
  const [contacts, setContacts] = useState([
    {
      id: 1,
      name: "John Doe",
      avatar: "https://avatar.iran.liara.run/public/boy?username=John",
    },
    {
      id: 2,
      name: "Mofenbenz",
      avatar: "https://avatar.iran.liara.run/public/girl?username=Maria",
    },
    {
      id: 3,
      name: "Enjelina Mofenbenz",
      avatar: "https://avatar.iran.liara.run/public/girl?username=John",
    },
    // more data with differenet name
    {
      id: 4,
      name: "Mafenb",
      avatar: "https://avatar.iran.liara.run/public/boy?username=Mafenb",
    },
    {
      id: 5,
      name: "Jack",
      avatar: "https://avatar.iran.liara.run/public/boy?username=Jack",
    },
  ]);
  return (
    <Section title="Send to Contact">
      {/* avatar list: 3x3 */}
      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerClassName="flex-row gap-3"
      >
        {contacts.map((contact) => (
          <ImageBackground
            key={contact.id}
            source={{ uri: contact.avatar }}
            className="w-14 h-14 rounded-full bg-gray-200"
          />
        ))}
      </ScrollView>
    </Section>
  );
}
