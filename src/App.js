import'./App.css'
import React from 'react';
import Card from './component/Card'

function App(){
    return (
        <div classNAme = 'App' >
            <Card 
            title = 'REACT JS'
            imageUrl ='https://www.freecodecamp.org/news/content/images/size/w2000/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png'
            body = ' React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.'>

            </Card>
        </div>
    );
}

export default App;