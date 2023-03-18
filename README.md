# 01-fundamentos-reactjs

## css
CSS files should have .module.css extension instead just .css in order to affect just the component with the same name. .css files shold also be imported with a name { cssName }.

Use className instead of class attribute, because 'class' is a reserved word for React.

.module.css files must be importead with an alias:

import { example } from './file.module.css';