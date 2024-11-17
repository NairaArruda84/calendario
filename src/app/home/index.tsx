import {View, Text} from "react-native";
import {useState} from "react";
import {Calendar, DateData, LocaleConfig} from "react-native-calendars";//tipagem da data
import {styles} from "./style";

import {ptBR} from "../../utils/configLocalCalendario"; 

//utilizando ele. diz q vai usar o pt-br e adiciona o arquivo 
LocaleConfig.locales ["pt-br"] = ptBR //adicionando a traducao
LocaleConfig.defaultLocale = "pt-br" //padrao q vou usar 

export function Home(){

    const[day, setDay] = useState<DateData>() //atualizar o estado 

    return (
        <View style = {styles.container}>
         <Calendar style = {styles.calendar} 
                   headerStyle = {{
                                    borderBottomWidth:0.5, 
                                    borderBottomColor: "#E8E8E8",
                                    paddingBottom: 10,
                                    marginBottom: 10
                                }}
                                theme = {{
                                    textMonthFontSize: 18,
                                    monthTextColor: "#E8E8E8",
                                    todayTextColor: "#F57505",
                                    selectedDayBackgroundColor: "#F57505",
                                    selectedDayTextColor: "#E8E8E8",
                                    calendarBackground: "transparent", 
                                    textDayStyle: { color : "#E8E8E8"},
                                    textDisabledColor: "#717171",
                                }}
                                //nao deixar marcar dias anteriores
                                minDate={new Date().toDateString()}
                                hideExtraDays = {true} //prop booleana
                                onDayPress = {setDay}//seleciona o dia
                                markedDates = { //dia marcado
                                    day && { //verifica se tem data marcada
                                        [day.dateString]: { selected:true }, 
                                    }
                                }

                   />
        </View>

    )
}