import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const handleDragStart = (e) => e.preventDefault();

const items = [
    <img style={{width:'500px'}} src="https://pix8.agoda.net/hotelImages/29384752/-1/3ecf25c3abd8b0e9c59ec45efe96a8e8.jpg?ca=29&ce=0" onDragStart={handleDragStart} role="presentation" />,
    <img style={{width:'500px'}} src="https://pix8.agoda.net/hotelImages/29384752/-1/15dcd8c324123a256318640ae0f37738.jpg?ca=29&ce=0" onDragStart={handleDragStart} role="presentation" />,
    <img style={{width:'500px'}} src="https://pix8.agoda.net/hotelImages/21725443/460375920/4923a2d13e3bcfe7254b4e36fd61f0af.jpg?ca=29&ce=0" onDragStart={handleDragStart} role="presentation" />,
];

function Header() {
    return (
            <div style={{ marginBottom:'40px', textAlign: 'center', margin: '0 auto', blockSize: '90px', borderBlockEndColor: 'rgb(0, 0, 81)', borderBlockStartColor: 'rgb(0, 0, 81)', borderBottomColor: 'rgb(0, 0, 81)', borderInlineEndColor: 'rgb(0, 0, 81)', borderInlineStartColor: 'rgb(0, 0, 81)', borderLeftColor: 'rgb(0, 0, 81)', borderRightColor: 'rgb(0, 0, 81)', borderTopColor: 'rgb(0, 0, 81)', boxSizing: 'border-box', caretColor: 'rgb(0, 0, 81)', color: 'rgb(0, 0, 81)', columnRuleColor: 'rgb(0, 0, 81)', fontFamily: 'Proxima Nova Cn, Helvetica Neue, Helvetica, sans-serif', fontSize: '90px', fontWeight: 900, inlineSize: '1140px', letterSpacing: '-2.7px', lineHeight: '90px', outlineColor: 'rgb(0, 0, 81)', textAlign: 'left', textDecoration: 'none solid rgb(0, 0, 81)', textDecorationColor: 'rgb(0, 0, 81)', textEmphasisColor: 'rgb(0, 0, 81)', textSizeAdjust: '100%', WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', WebkitTextFillColor: 'rgb(0, 0, 81)', WebkitTextStrokeColor: 'rgb(0, 0, 81)', width: '1140px'}} className = {"format__title title"} >Отель</div>)
}

export default function RooomGallery(){
    return (
            <div style={{  height:'300px'}}>
                <Header />
                <div style={{height:'30px'}}/>
                <AliceCarousel mouseTracking items={items} autoHeight={true} autoWidth={true}/>
            </div>
    );
}