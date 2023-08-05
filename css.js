export function css(styleSheet, selector, propertyName, propertyValue) {
    for (let x = 0; x < document.styleSheets.length; x++){

        if(document.styleSheets[x].href.includes(styleSheet)){

            const css = document.styleSheets[x].cssRules;
            for (let i = 0; i < css.length; i++){

                if (css[i].selectorText == selector){
                    css[i].style.setProperty(propertyName, propertyValue);
                }

            }

        }

    }
}
