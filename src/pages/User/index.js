/* eslint-disable react/prop-types */
import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import {Container,Header,Avatar,Name,Bio, Stars, Starred,Info,OwnerAvatar,Title,Author,ButtonBk,TextBk} from "./styles";
import api from '../../services/api'
// import 'react-native-gesture-handler';
// import { Container } from './styles';

export default class User extends Component{

  state = {
    stars: [],
  };


  async componentDidMount() {
    const {route} = this.props
    const {user} = route.params;

    const response = await api.get(`users/${user.login}/starred`);
    this.setState({ stars: response.data });
    //console.warn('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>',response.data);

    }


  render(){
    const {stars} = this.state
    const {navigation, route} = this.props
    const {user} = route.params;
  return (
    <Container>
      <Header>
          <Avatar source={{ uri: user.avatar }} />
          < Name>{user.name}</ Name>
          <Bio>{user.bio}</ Bio>
      </Header>
      <Stars
        data={ stars}
        keyExtractor={star => String(star.id)}
        renderItem={({ item }) =>(
              <Starred>
                <OwnerAvatar source={{ uri: item.owner.avatar_url }} />
                <Info>
                    <Title>{ item.name}</ Title>
                    <Author>{item.owner.login}</Author>
                </Info>
              </Starred>
              )}
      />
      <ButtonBk onPress={() => navigation.navigate('Main')}>
         <TextBk> Go to Home</TextBk>
      </ButtonBk>
      <ButtonBk  onPress={() => navigation.goBack()}>
         <TextBk>Go back</TextBk>
      </ButtonBk>
      <ButtonBk
        onPress={() => navigation.popToTop()}
      >
        <TextBk>Go back to first screen in stack</TextBk>
     </ButtonBk>
    </Container>

   )
  };
}
