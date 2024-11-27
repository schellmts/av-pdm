import React from 'react';
import { StyleSheet, Text, View, SectionList, Image } from 'react-native';
import dataPassengers from "@/app/services/data-passengers"; // Importando os dados
import { groupByCountry } from "@/app/helpers/groupCountryHelper";

const Item = ({ item }: { item: any }) => (
    <View style={styles.item}>
        <Text style={styles.itemText}>Número Cliente: {item.id}</Text>
        <Text style={styles.itemText}>Cliente: {item.passenger_name}</Text>
        <View style={styles.imgContainer}>
            <Image source={{ uri: item.passenger_avatar }} style={styles.image} />
        </View>
        <Text style={styles.itemText}>Origem: {item.origin}</Text>
        <Text style={styles.itemText}>Destino: {item.destination}</Text>
    </View>
);

const SectionListComponent = () => {
    const groupedData = groupByCountry(dataPassengers, 'origin');

    return (
        <View style={styles.container}>
            <SectionList style={styles.section}
                         sections={Object.values(groupedData)}
                         keyExtractor={(item) => item.id.toString()}
                         renderItem={({ item }) => <Item item={item} />}
                         renderSectionHeader={({ section: { title } }) => (
                             <View style={styles.header}>
                                 <Text style={styles.headerText}>{title}</Text>
                             </View>
                         )}
            />
        </View>
    );
};

export default SectionListComponent;

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
        alignItems: 'center',
        gap: 50,
        width: '100%',
        backgroundColor: '#0A1D37',
    },
    section: {
        width: '100%',
    },
    header: {
        backgroundColor: '#ADD8E6',
        padding: 10,
        alignItems: 'center',
        borderRadius: 9999,
        marginBottom: 10,
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#1E2A47',
    },
    item: {
        padding: 15,
        backgroundColor: '#1E2A47',
        marginVertical: 8,
        borderRadius: 10,
        width: '100%',
        position: "relative",
        marginBottom: 10,
    },
    imgContainer: {
        position: "absolute",
        right: 10,
        top: 10,
        backgroundColor: '#ADD8E6',
        borderRadius: 25,
        padding: 3,
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    itemText: {
        fontSize: 16,
        color: '#FFFFFF',
        marginBottom: 5,
    },
});
