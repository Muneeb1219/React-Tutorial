import React from 'react'

export default class Select extends React.Component{
    constructor()
    {
        super();
    }
    
    render()
    {
        return(
            handleLangChange = (prop) => {
                var lang = this.dropdown.value;
                this.props.onSelectLanguage(lang);            
            }

        )
    }
}
