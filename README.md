# angular7

## NG CLI Commands

- ng new [name] :  Creates new app
- ng serve : Run a server on ort 4200 which runs the code, if errors about:
    > ERROR in node_modules/rxjs/internal/types.d.ts(81,44): error TS1005: ';' expected.
    
    > then run:

    > **npm audit fix --force**
    
- ng generate component [component-name] : Creates a new component, creates the directpry inside src/app, creates the 
css, html, spec.ts and ts files with a template ready to use and update the `app.module.ts` to include the new component
    > ng g c [component-name] : shortcut
    
## Adding bootstrap (or other libraries)
 
- npm install --save bootstrap : Adding bootstrap to the project
- Update `angular.json` to add the dependency
 
 ## Components
 
 - Need the decorator `@Component`
 - Need a HTML template (inline or external)
 - Need a unique selector
 - Ways to reference a component:
   * By Element: Default mode i.e. `<component-name>`
   * By Attribute: When the `selector` is enclosed within `[]` then the component is referenced by attribute i.e. <div `component-name`>
   * By class: When the `selector` is prefixed with a `.` then the component is referenced by class i.e. <div class = '`component-name`>


