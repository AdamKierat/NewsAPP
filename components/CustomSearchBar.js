import React, { useState } from 'react'
import { SearchBar } from 'react-native-elements'
import { StyleSheet, View, SafeAreaView, Text } from 'react-native'
import { API_KEY } from '../utils/constants'

const CustomSearchBar = ({ search, setSearch, itemList, setItemList }) => {


    const [apiURL, setApiURL] = useState()
    const getMoviesFromApiAsync = async () => {


        try {
            let response = await fetch(
                'https://newsapi.org/v2/everything?q=' + search + '&sortBy=popularity&apiKey=' + API_KEY
            );
            setApiURL('https://newsapi.org/v2/everything?q=${search}&sortBy=popularity&apiKey=fdd7b2e027824780b9cc5e13b04e0799')
            let json = await response.json();
            setItemList(json);
            return json.movies;
        } catch (error) {
            console.error(error);
        }

    };
    return (
        <SearchBar
            placeholder="Type Here..."
            placeholderTextColor='#fff'
            onChangeText={(text) => setSearch(text)}
            value={search}
            round
            showLoading
            searchIcon={{ color: "#fff" }}
            clearIcon={{ color: "#fff" }}
            containerStyle={{
                backgroundColor: "#fb9327",
                borderBottomColor: 'transparent',
                borderTopColor: 'transparent'
            }
            }
            inputContainerStyle={{
                backgroundColor: "#f0a150"
            }}
            inputStyle={{ color: '#fff' }}
            onSubmitEditing={getMoviesFromApiAsync}

        />
    )
}

export default CustomSearchBar

const styles = StyleSheet.create({})
