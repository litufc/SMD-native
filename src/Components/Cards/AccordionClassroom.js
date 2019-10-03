import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, Icon, Accordion, Text, View, Grid, Col, Badge, Card } from 'native-base';
import AppStyles from '../../global.js';

export default class AccordionClassroom extends Component {
  
  _renderHeader(item, expanded) { //cabeçalho do accordion
    let hours = new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds();
    let dateActual = new Date().getDate() + "/" + (new Date().getMonth() + 1) + "/" + new Date().getFullYear(); 
    let isBusy = false;
    let isNow = true;
    let actual;

    //verifica se tem algo acontecendo na sala no momento atual
    for(var i = 0; i < item.schedules.length; i++){
      if(Date.parse(dateActual + ' 00:00:00') != Date.parse(item.schedules[i].date + ' 00:00:00')){
        isNow = false;
        break;
      }if(Date.parse('01/01/2011 '+item.schedules[i].start) <= Date.parse('01/01/2011 '+hours) && Date.parse('01/01/2011 '+hours) < Date.parse('01/01/2011 '+item.schedules[i].end)){
        isBusy = true;
        actual = i;
        break;
      }
    }
      
    return (
      <Card style={styles.card}>
          <Grid style={{alignItems: 'center'}}>
            <Col style={{width:'60%'}}>
                <Text style={styles.textCard} numberOfLines={1}>{item.title}</Text>
            </Col>
            <Col style={{flexDirection: 'row-reverse'}}>
                {expanded
                  ? <Icon style={styles.iconExpanded} name="remove-circle" />
                  : <Icon style={styles.iconExpanded} name="add-circle" />}
                
                {isNow &&
                  <>
                    {isBusy ?
                        <Badge style={styles.badgeBusy}>
                            <Text style={styles.textBadge}>Ocupada</Text>
                        </Badge>
                      :
                        <Badge style={styles.badgeFree}>
                            <Text style={styles.textBadge}>Livre</Text>
                        </Badge>
                    }
                  </>
                }
            </Col>
          </Grid>

          {/* Subtítulo */}
          {!expanded && 
            <>
              {isBusy &&
                <Text style={styles.textFocus}>{item.schedules[actual].start.split(":")[0] + ":" + item.schedules[actual].start.split(":")[1] + " às " + item.schedules[actual].end.split(":")[0] + ":" + item.schedules[actual].end.split(":")[1] + " - " + item.schedules[actual].description + " - " + item.schedules[actual].responsible}</Text>
              }
            </>
          }
      </Card>
    );
  }
  _renderContent(item) {
    let hours = new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds(); 
    let dateActual = new Date().getDate() + "/" + (new Date().getMonth() + 1)+ "/" + new Date().getFullYear(); 
    return (
      <View style={styles.content}>
        {item.schedules.map((id, index) => 
          <>
            {/* caso a data já tenha passado */}
            {Date.parse(dateActual + ' 00:00:00') > Date.parse(id.date + ' 00:00:00') &&
              <Text style={styles.descriptionDisable}>{id.start.split(":")[0] + ":" + id.start.split(":")[1] + " às " + id.end.split(":")[0] + ":" + id.end.split(":")[1] + " - " + id.description + " - " + id.responsible}</Text>
            }

            {/* caso a data ainda vá acontecer */}
            {Date.parse(dateActual + ' 00:00:00') < Date.parse(id.date + ' 00:00:00') &&
              <Text style={styles.description}>{id.start.split(":")[0] + ":" + id.start.split(":")[1] + " às " + id.end.split(":")[0] + ":" + id.end.split(":")[1] + " - " + id.description + " - " + id.responsible}</Text>
            }

            {/* caso a data seja hoje */}
            {Date.parse(dateActual + ' 00:00:00') == Date.parse(id.date + ' 00:00:00') &&
              <>
                {Date.parse('01/01/2011 '+id.start) <= Date.parse('01/01/2011 '+hours) && Date.parse('01/01/2011 '+hours) < Date.parse('01/01/2011 '+id.end) ? (
                  <Text style={styles.descriptionFocus}>{id.start.split(":")[0] + ":" + id.start.split(":")[1] + " às " + id.end.split(":")[0] + ":" + id.end.split(":")[1] + " - " + id.description + " - " + id.responsible}</Text>
                ):(
                  <>
                    {Date.parse('01/01/2011 '+id.end) <= Date.parse('01/01/2011 '+hours) ?
                        <Text style={styles.descriptionDisable}>{id.start.split(":")[0] + ":" + id.start.split(":")[1] + " às " + id.end.split(":")[0] + ":" + id.end.split(":")[1] + " - " + id.description + " - " + id.responsible}</Text>
                      :
                        <Text style={styles.description}>{id.start.split(":")[0] + ":" + id.start.split(":")[1] + " às " + id.end.split(":")[0] + ":" + id.end.split(":")[1] + " - " + id.description + " - " + id.responsible}</Text>
                    }
                  </>
                )}
              </>
            }
          </>
        )}
      </View>
    );
  }
  render() {
    return (
      <Container>
        <Content padder style={{ backgroundColor: AppStyles.colour.background }}>
          <Accordion
            dataArray={this.props.data}
            animation={true}
            expanded={true}
            renderHeader={this._renderHeader}
            renderContent={this._renderContent}
            style={{borderWeight: 0}}
          />
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  card:{
      borderRadius: 10,
      paddingVertical: 12,
      paddingHorizontal: 16,
      marginBottom: 10
  },
  textCard: {
      fontFamily: 'OpenSans-Bold',
      fontSize: 20,
      color: AppStyles.colour.primaryColor
  },
  badgeBusy:{
      backgroundColor: AppStyles.colour.alertColor,
      marginRight: 8,
      width: 90
  },
  badgeFree:{
      backgroundColor: AppStyles.colour.secundaryColor,
      marginRight: 8,
      width: 90
  },
  textBadge:{
      color: '#fff',
      fontFamily: 'OpenSans-Bold',
      fontSize: 12
  },
  iconExpanded:{
      fontSize: 25, 
      alignSelf: 'center',
      color: AppStyles.colour.secundaryColor
  },
  content:{
      backgroundColor: '#FFF',
      padding: 12,
      paddingTop: 0,
      marginBottom: 10
  },
  textFocus: {
      color: AppStyles.colour.secundaryColor,
      fontSize: 16,
      marginTop: 5
  },
  description:{
      color: AppStyles.colour.text,
      fontSize: 16,
      paddingVertical: 8,
      borderBottomWidth: 1,
      borderBottomColor: AppStyles.colour.text
  },
  descriptionFocus:{
      color: AppStyles.colour.secundaryColor,
      fontSize: 16,
      paddingVertical: 8,
      borderBottomWidth: 1,
      borderBottomColor: AppStyles.colour.secundaryColor
  },
  descriptionDisable:{
      color: '#D1D1D1',
      fontSize: 16,
      paddingVertical: 8,
      borderBottomWidth: 1,
      borderBottomColor: '#D1D1D1'
  },
});