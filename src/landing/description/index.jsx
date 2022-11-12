function Header() {
    return (
            <div style={{ marginBottom:'40px', textAlign: 'center', margin: '0 auto', blockSize: '90px', borderBlockEndColor: 'rgb(0, 0, 81)', borderBlockStartColor: 'rgb(0, 0, 81)', borderBottomColor: 'rgb(0, 0, 81)', borderInlineEndColor: 'rgb(0, 0, 81)', borderInlineStartColor: 'rgb(0, 0, 81)', borderLeftColor: 'rgb(0, 0, 81)', borderRightColor: 'rgb(0, 0, 81)', borderTopColor: 'rgb(0, 0, 81)', boxSizing: 'border-box', caretColor: 'rgb(0, 0, 81)', color: 'rgb(0, 0, 81)', columnRuleColor: 'rgb(0, 0, 81)', fontFamily: 'Proxima Nova Cn, Helvetica Neue, Helvetica, sans-serif', fontSize: '90px', fontWeight: 900, inlineSize: '1140px', letterSpacing: '-2.7px', lineHeight: '90px', outlineColor: 'rgb(0, 0, 81)', textAlign: 'left', textDecoration: 'none solid rgb(0, 0, 81)', textDecorationColor: 'rgb(0, 0, 81)', textEmphasisColor: 'rgb(0, 0, 81)', textSizeAdjust: '100%', WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', WebkitTextFillColor: 'rgb(0, 0, 81)', WebkitTextStrokeColor: 'rgb(0, 0, 81)', width: '1140px'}} className = {"format__title title"} >Формат</div>
    )
}

function Body({data}){
    return <p style={{margin: 0, blockSize: '95.9062px', borderBlockEndColor: 'rgb(51, 51, 51)', borderBlockStartColor: 'rgb(51, 51, 51)', borderBottomColor: 'rgb(51, 51, 51)', borderInlineEndColor: 'rgb(51, 51, 51)', borderInlineStartColor: 'rgb(51, 51, 51)', borderLeftColor: 'rgb(51, 51, 51)', borderRightColor: 'rgb(51, 51, 51)', borderTopColor: 'rgb(51, 51, 51)', boxSizing: 'border-box', caretColor: 'rgb(51, 51, 51)', color: 'rgb(51, 51, 51)', columnRuleColor: 'rgb(51, 51, 51)', fontFamily: 'Proxima Nova, Arial, Helvetica, sans-serif', fontSize: '23px', inlineSize: '1140px', lineHeight: '31.97px', outlineColor: 'rgb(51, 51, 51)', textAlign: 'left', textDecoration: 'none solid rgb(51, 51, 51)', textDecorationColor: 'rgb(51, 51, 51)', textEmphasisColor: 'rgb(51, 51, 51)', textSizeAdjust: '100%', WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', WebkitTextFillColor: 'rgb(51, 51, 51)', WebkitTextStrokeColor: 'rgb(51, 51, 51)'}} >
        {data.body}
    </p>
}

export default function Description({data}) {
    return (<div style={{padding: '20px'}}>
        <Header/>
        <div style={{height:'30px'}}/>
        <Body data={data}/>
    </div>)
}