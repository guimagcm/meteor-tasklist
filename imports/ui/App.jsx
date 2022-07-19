import React,{useState} from 'react';

import './App.css'
import './res/Button.css'
import { Header } from '/imports/ui/res/Header';
import { AddTask } from '/imports/ui/res/AddTask';
import { ImgBox } from '/imports/ui/res/ImgBox';
import { ImgLogo } from '/imports/ui/res/ImgLogo';



export const App = () => {
    const [src, setSrc] = useState('https://1.bp.blogspot.com/-WvpVOfQURGI/VY4dAcL4YgI/AAAAAAAADqw/BHCEc_1H5Fw/s1600/How%2Bto%2BPlay%2BOptimally%2BAgainst%2BUnknown%2BOpponents.jpg');

    const [fighters, setFighters] = useState([
        {id:'1', title:'Tank Abbot', src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZhZzfBVl07RqVCotYfNGDH4kprauq410MSA&usqp=CAU', completed:false},
        {id:'2', title:'Ken Shamrock', src:'http://s2.glbimg.com/lwDGuVpBgEo1svTGgvKe_6sq8T8=/290x383/smart/s2.glbimg.com/Os7n5s3NG6HhfdIUpqrieltFesE=/0x6:620x826/300x397/s.glbimg.com/es/ge/f/original/2013/03/26/kenshamrock_get.jpg', completed:false},
        {id:'3', title:'Marco Ruas', src:'https://tatame.com.br/wp-content/uploads/2021/07/ruas.jpg', completed:false},
        {id:'4', title:'Bob Sapp', src:'http://www.superlutas.com.br/wp-content/uploads/2016/05/Bob-Sapp.jpg', completed:false},
        {id:'5', title:'Chuck Lidell', src:'https://i.pinimg.com/originals/41/d2/61/41d26190dd23aca3194a73e3e3b53549.jpg', completed:false},
    ]);

    const handleFighterClick = (fighterSrc) => {
        console.log(fighterSrc);
        setSrc(fighterSrc);
    }

    return ( 
        <div className='container'>
            <div className='container-internal'>
            <ImgLogo/>
            <ImgBox fighterSrc={src}/>
            <Header/>
            <AddTask fighters={fighters} handleFighterClick={handleFighterClick}/>
            <button className='button-msg'>Click On Fighter</button>
            </div>
        </div>
     );
}

