
modification projet Ccccc

function Load_Sentences(ArrayObj) { 

      ArrayObj.push({  sId:'Title', sName:'Title', sAttributeName: 'innerHTML', 
                       sFr:  'Recherche dans Workplace',
                       sUs:  'Search on Workplace',
                       sPt:  'Search on Workplace (pt)',
                       sNl:  'Search on Workplace (NL)',
                       sRu:  'Search on Workplace (Ru)',
                       sSp:  'Busquedar de Workplace'      }    );

      ArrayObj.push({  sId:'Nbre_Resultats', sName:'Nbre_Resultats', sAttributeName: 'innerHTML', 
                       sFr:  'compte(s) trouv&eacute;(s)',
                       sUs:  'account(s) found',
                       sPt:  'account(s) found',
                       sNl:  'account(s) found',
                       sRu:  'account(s) found',
                       sSp:  'Cantided de personas encontradas'      }  	);

      ArrayObj.push({  sId:'Details', sName:'Details', sAttributeName: 'innerHTML', 
                       sFr:  'D&eacute;tails',
                       sUs:  'Details',
                       sPt:  'Details (pt)',
                       sNl:  'Details (NL)',
                       sRu:  'Details (Ru)',
                       sSp:  'Details'      }    );



      ArrayObj.push({  sId:'Name_Field', sName:'Name_Field', sAttributeName: 'placeholder', 
                       sFr:  'Insérer Nom à rechercher...',
                       sUs:  'Insert the Name to search...',
                       sPt:  'Insert the Name (pt)',
                       sNl:  'Insert the Name (NL)',
                       sRu:  'Insert the Name (Ru)',
                       sSp:  'Escribir el apellido en línea de edición de entrada'
      }  	);

      ArrayObj.push({  sId:'Button_Stop', sName:'Button_Stop', sAttributeName: '', 
                       sFr:  'Annulation. Pas de nom !!',
                       sUs:  'Abort. No name',
                       sPt:  'Abort. No name',
                       sNl:  'Abort. No name',
                       sRu:  'Abort. No name',
                       sSp:  'Stop. No hay apellido'
      }  	);


      ArrayObj.push({  sId:'Button_Search', sName:'Button_Search', sAttributeName: 'value', 
                       sFr:  'Recherche',
                       sUs:  'Search',
                       sPt:  'Search (Pt)',
                       sNl:  'Search (Nl)',
                       sRu:  'Search (Ru)',
                       sSp:  'Busquedar (Sp)'
      }  	);

      /* Display a person >>>>>>>>>>>>>>>>>>>>>>>>>>> */

      ArrayObj.push({  sId:'DisplayPerson_Name', sName:'DisplayPerson_Name', sAttributeName: 'value', 
                       sFr:  'Nom',
                       sUs:  'Name',
                       sPt:  'Name (Pt)',
                       sNl:  'Name (Nl)',
                       sRu:  'Name (Ru)',
                       sSp:  'Apellido'
      }   );

      ArrayObj.push({  sId:'DisplayPerson_Title', sName:'DisplayPerson_Title', sAttributeName: 'value', 
                       sFr:  'Titre',
                       sUs:  'Title',
                       sPt:  'Title (Pt)',
                       sNl:  'Title (Nl)',
                       sRu:  'Title (Ru)',
                       sSp:  'Title (Sp)'
      }   );

      ArrayObj.push({  sId:'DisplayPerson_DepartmentName', sName:'DisplayPerson_Departement', sAttributeName: 'value', 
                       sFr:  'D&eacute;partement',
                       sUs:  'Departement Name',
                       sPt:  'Departement (Pt)',
                       sNl:  'Departement (Nl)',
                       sRu:  'Departement (Ru)',
                       sSp:  'Departement (Sp)'
      }   );

      ArrayObj.push({  sId:'DisplayPerson_DivisionName', sName:'DisplayPerson_DivisionName', sAttributeName: 'value', 
                       sFr:  'Division',
                       sUs:  'Division Name',
                       sPt:  'DivisionDivision (Pt)',
                       sNl:  'Division (Nl)',
                       sRu:  'Division (Ru)',
                       sSp:  'Division (Sp)'
      }   );

      ArrayObj.push({  sId:'DisplayPerson_OrganizationName', sName:'DisplayPerson_OrganizationName', sAttributeName: 'value', 
                       sFr:  'Organisation',
                       sUs:  'Organization',
                       sPt:  'Organisation (Pt)',
                       sNl:  'Organisation (Nl)',
                       sRu:  'Organisation (Ru)',
                       sSp:  'Organisation (Sp)'
      }   );

      ArrayObj.push({  sId:'DisplayPerson_Tel', sName:'DisplayPerson_Tel', sAttributeName: 'value', 
                       sFr:  'Tel : ',
                       sUs:  'Phone : ',
                       sPt:  'Phone :  (Pt)',
                       sNl:  'Phone :  (Nl)',
                       sRu:  'Phone :  (Ru)',
                       sSp:  'Phone :  (Sp)'
      }   );


      ArrayObj.push({  sId:'DisplayPerson_Email', sName:'DisplayPerson_Email', sAttributeName: 'value', 
                       sFr:  'Email',
                       sUs:  'Email',
                       sPt:  'Email (Pt)',
                       sNl:  'Email (Nl)',
                       sRu:  'Email (Ru)',
                       sSp:  'Email (Sp)'
      }   );

      ArrayObj.push({  sId:'DisplayPerson_WorkAddress', sName:'DisplayPerson_WorkAddress', sAttributeName: 'value', 
                       sFr:  'Localisation',
                       sUs:  'Location',
                       sPt:  'Location (Pt)',
                       sNl:  'Location (Nl)',
                       sRu:  'Location (Ru)',
                       sSp:  'Location (Sp)'
      }   );

      ArrayObj.push({  sId:'DisplayPerson_Manager', sName:'DisplayPerson_Manager', sAttributeName: 'value', 
                       sFr:  'Manager',
                       sUs:  'Manager',
                       sPt:  'Manager (Pt)',
                       sNl:  'Manager (Nl)',
                       sRu:  'Manager (Ru)',
                       sSp:  'Manager (Sp)'
      }   );

      ArrayObj.push({  sId:'DisplayPerson_Existed', sName:'DisplayPerson_Existed', sAttributeName: 'value', 
                       sFr:  '(compte d&eacute;sactiv&eacute;)',
                       sUs:  '(deactivated account)',
                       sPt:  '(deactivated account) (Pt)',
                       sNl:  '(deactivated account) (Nl)',
                       sRu:  '(deactivated account) (Ru)',
                       sSp:  '(deactivated account) (Sp)'
      }   );
      /* Display a person <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */
 } 

   /* Insere les phrase de langues dans la page HTML */
   function Init_Language(sLang, iNbrePersonnesTrouvees) {
      Load_Sentences(TableauLangues);     
      sEspace = ''; 
      TableauLangues.forEach( function(Obj_element) {
            /* On cherche TOUS les id dans le tableau, pour changer la langue */
            /* Il se peut que l'id n'existe pas encore, (DisplayPerson_*)     */
            /* et donc, cela est pris dans de try/catch                       */

            Obj_elementDOM =  document.getElementById(Obj_element.sId);    
            if ( Obj_element.sAttributeName == 'innerHTML'   )  {
               sEspace  = '&nbsp;';
               if ( Obj_element.sId == 'Nbre_Resultats') {
                /* Mettre ici la vraie valeur numerique */
                  sTmp = "Obj_elementDOM."+ Obj_element.sAttributeName + " = '" +sEspace+ "'+iNbrePersonnesTrouvees+'" + sEspace + "' +"+ "Obj_element.s"+sLang ;              
               } else {
                  sTmp = "Obj_elementDOM."+ Obj_element.sAttributeName + " = '"+sEspace + "' +  "+"Obj_element.s"+sLang ;
               }
            } 
            if ( Obj_element.sAttributeName == 'placeholder'   )  {
               sEspace  = ' ';
               sTmp = "Obj_elementDOM."+ Obj_element.sAttributeName + " = '"+sEspace + "' +  "+"Obj_element.s"+sLang ;
            } 
            if ( Obj_element.sAttributeName == 'value'   )  {
               sEspace  = ' ';
               sTmp = "Obj_elementDOM."+ Obj_element.sAttributeName + " = '"+sEspace + "' +  "+"Obj_element.s"+sLang ;
            } 

            if ( Obj_element.sId == 'Button_Stop') { 
                 /*alert('Obj_element.s'+sLang); */
                 eval('sAnnulation =Obj_element.s'+sLang); 
            } else {
                 try {
                    eval(sTmp);                  
                 } catch(e) {
                    /* Nous sommes dans le cas ou l'id est encore inexistant */
                    /* (DisplayPerson_*)                                     */
                 }
            }
         } /* end function(Obj_element) */
      );  /* end TableauLangues.foreach() */

   }  /* end Init_Language(...) */

function Update_Sentences(sId, sLanguage) {
      for(iTmp = 0; iTmp < TableauLangues.length; iTmp++ ) {
            if ( sId == TableauLangues[iTmp].sId) {
               var sTmp = 'TableauLangues[iTmp].s'+sLanguage;
               var sTmp1 = eval(sTmp);
               return(sTmp1);
            }
      }
}  /* end Update_Sentences(...) */ 


function DisplayPersonDetail(objPerson, sLanguage) {

var sTmp = "";     

  sTmp = sTmp + "<div class=\"col py-2 \">" 
  sTmp = sTmp + "<div class=\"row border-bottom \">"
  sTmp = sTmp + "<div class=\"col text-secondary \">CONTACT INFORMATION</div>"
  sTmp = sTmp + "</div>"
  sTmp = sTmp + "</div>"

  sTmp = sTmp + "<div class=\"col py-2\">" 
  sTmp = sTmp + "   <div class=\"row border-bottom no-gutters \">"
  sTmp = sTmp + "      <div class=\"col-5 text-secondary \">$nom$</div>"
  sTmp = sTmp + "      <div class=\"col text-dark \">#nom#</div>"
  sTmp = sTmp + "   </div>"
  sTmp = sTmp + "</div>"

  sTmp = sTmp + "<div class=\"col py-2\">" 
  sTmp = sTmp + "   <div class=\"row border-bottom no-gutters \">"
  sTmp = sTmp + "      <div class=\"col-5 text-secondary \">$title$</div>"
  sTmp = sTmp + "      <div class=\"col text-dark \">#title#</div>"
  sTmp = sTmp + "   </div>"
  sTmp = sTmp + "</div>"

  sTmp = sTmp + "<div class=\"col py-2\">" 
  sTmp = sTmp + "   <div class=\"row border-bottom no-gutters \">"
  sTmp = sTmp + "      <div class=\"col-5 text-secondary \">$departmentName$</div>"
  sTmp = sTmp + "      <div class=\"col text-dark \">#departmentName#</div>"
  sTmp = sTmp + "   </div>"
  sTmp = sTmp + "</div>"

  sTmp = sTmp + "<div class=\"col py-2\">" 
  sTmp = sTmp + "   <div class=\"row border-bottom no-gutters \">"
  sTmp = sTmp + "      <div class=\"col-5 text-secondary \">$divisionName$</div>"
  sTmp = sTmp + "      <div class=\"col text-dark \">#divisionName#</div>"
  sTmp = sTmp + "   </div>"
  sTmp = sTmp + "</div>"

  sTmp = sTmp + "<div class=\"col py-2\">" 
  sTmp = sTmp + "   <div class=\"row border-bottom no-gutters \">"
  sTmp = sTmp + "      <div class=\"col-5 text-secondary \">$organizationName$</div>"
  sTmp = sTmp + "      <div class=\"col text-dark \">#organizationName#</div>"
  sTmp = sTmp + "   </div>"
  sTmp = sTmp + "</div>"

  sTmp = sTmp + "<div class=\"col py-2\">" 
  sTmp = sTmp + "   <div class=\"row border-bottom no-gutters \">"
  sTmp = sTmp + "      <div class=\"col-5 text-secondary \">$tel$</div>"
  sTmp = sTmp + "      <div class=\"col text-dark \">#tel#</div>"
  sTmp = sTmp + "   </div>"
  sTmp = sTmp + "</div>"

  sTmp = sTmp + "<div class=\"col py-2\">" 
  sTmp = sTmp + "   <div class=\"row border-bottom no-gutters \">"
  sTmp = sTmp + "      <div class=\"col-5 text-secondary \">$email$</div>"
  sTmp = sTmp + "      <div class=\"col text-dark \">#email#</div>"
  sTmp = sTmp + "   </div>"
  sTmp = sTmp + "</div>"

  sTmp = sTmp + "<div class=\"col py-2\">" 
  sTmp = sTmp + "   <div class=\"row border-bottom no-gutters \">"
  sTmp = sTmp + "      <div class=\"col-5 text-secondary \">$workAddress$</div>"
  sTmp = sTmp + "      <div class=\"col text-dark \">#workAddress#</div>"
  sTmp = sTmp + "   </div>"
  sTmp = sTmp + "</div>"

  sTmp = sTmp + "<div class=\"col py-2\">" 
  sTmp = sTmp + "   <div class=\"row border-bottom no-gutters \">"
  sTmp = sTmp + "      <div class=\"col-5 text-secondary \">$manager$</div>"
  sTmp = sTmp + "      <div class=\"col text-dark \">#manager#</div>"
  sTmp = sTmp + "   </div>"
  sTmp = sTmp + "</div>"



  if ( objPerson == null)  { 
      return('');
  }


  try {

     var WordToReplace = Update_Sentences('DisplayPerson_Name', sLanguage);
     sTmp =  replaceSubstring (sTmp, '$nom$',  WordToReplace, false);
     if (( objPerson != null) && ( objPerson.name.name != null)) {
        if ( objPerson.more.isActive == true) {
           sTmp =  replaceSubstring (sTmp, '#nom#','<b>'+objPerson.name.name+'</b>', false);    
           sTmp =  replaceSubstring (sTmp, '#nom#','<b>'+objPerson.name.name+'</b>', false); 
           sTmp =  replaceSubstring (sTmp, '$DisplayPerson_Existed$','', false);            
        } else {
           sTmp =  replaceSubstring (sTmp, '#nom#','<b><s>'+objPerson.name.name+'</s></b>', false); 
           sTmp =  replaceSubstring (sTmp, '#nom#','<b>'+objPerson.name.name+'</b>', false); 
           var WordToReplace = Update_Sentences('DisplayPerson_Existed', sLanguage);
           sTmp =  replaceSubstring (sTmp,'$DisplayPerson_Existed$',WordToReplace, false);      
        }
     } else {
        sTmp =  replaceSubstring (sTmp, '#nom#','', false);          
     }

     var WordToReplace = Update_Sentences('DisplayPerson_Title', sLanguage);
     sTmp =  replaceSubstring (sTmp, '$title$',  WordToReplace, false);
     if (( objPerson != null) && ( objPerson.name.title != null)) {
        sTmp =  replaceSubstring (sTmp, '#title#','<b>'+objPerson.name.title+'</b>', false);  
     } else {
        sTmp =  replaceSubstring (sTmp, '#title#','', false);          
     }


  // objPhoto = new Image();
  // objPhoto.src = 'data:image/jpeg;base64,' + hexToBase64(PictureBinary);

   //$( "#photoPersonne" ).src = 'data:image/jpeg;base64,' + hexToBase64(PictureBinary);; 
//alert(objPerson.photoCode64);

     if (( objPerson != null) && ( objPerson.photoCode64 != null)) {
        var sImg = '<img  src=\'data:image/jpg;base64,'+objPerson.photoCode64+'\'>';
        //    var sImg = '<img src=\'data:image/jpg;base64,'+'iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAAAwFBMVEXm7NK41k3w8fDv7+q01Tyy0zqv0DeqyjOszDWnxjClxC6iwCu11z6y1DvA2WbY4rCAmSXO3JZDTxOiwC3q7tyryzTs7uSqyi6tzTCmxSukwi9aaxkWGga+3FLv8Ozh6MTT36MrMwywyVBziSC01TbT5ZW9z3Xi6Mq2y2Xu8Oioxy7f572qxzvI33Tb6KvR35ilwTmvykiwzzvV36/G2IPw8O++02+btyepyDKvzzifvSmw0TmtzTbw8PAAAADx8fEC59dUAAAA50lEQVQYV13RaXPCIBAG4FiVqlhyX5o23vfVqUq6mvD//1XZJY5T9xPzzLuwgKXKslQvZSG+6UXgCnFePtBE7e/ivXP/nRvUUl7UqNclvO3rpLqofPDAD8xiu2pOntjamqRy/RqZxs81oeVzwpCwfyA8A+8mLKFku9XfI0YnSKXnSYZ7ahSII+AwrqoMmEFKriAeVrqGM4O4Z+ADZIhjg3R6LtMpWuW0ERs5zunKVHdnnnMLNQqaUS0kyKkjE1aE98b8y9x9JYHH8aZXFMKO6JFMEvhucj3Wj0kY2D92HlHbE/9Vk77mD6srRZqmVEAZAAAAAElFTkSuQmCC'+'\'>';
        sTmp =  replaceSubstring (sTmp, '#photo#',sImg, false);  
     } else {
        sTmp =  replaceSubstring (sTmp, '#photo#','', false);          
     }
//alert(sImg);


     var WordToReplace = Update_Sentences('DisplayPerson_DepartmentName', sLanguage);
     sTmp =  replaceSubstring (sTmp, '$departmentName$',  WordToReplace, false);
     if (( objPerson != null) && ( objPerson.departmentName != null)) {
        sTmp =  replaceSubstring (sTmp, '#departmentName#','<b>'+objPerson.departmentName+'</b>', false);  
     } else {
        sTmp =  replaceSubstring (sTmp, '#departmentName#','', false);          
     }

     var WordToReplace = Update_Sentences('DisplayPerson_DivisionName', sLanguage);
     sTmp =  replaceSubstring (sTmp, '$divisionName$',  WordToReplace, false);
     if (( objPerson != null) && ( objPerson.divisionName != null)) {
        sTmp =  replaceSubstring (sTmp, '#divisionName#','<b>'+objPerson.divisionName+'</b>', false);  
     } else {
        sTmp =  replaceSubstring (sTmp, '#divisionName#','', false);          
     }

     var WordToReplace = Update_Sentences('DisplayPerson_OrganizationName', sLanguage);
     sTmp =  replaceSubstring (sTmp, '$organizationName$',  WordToReplace, false);
     if (( objPerson != null) && ( objPerson.organizationName != null)) {
        sTmp =  replaceSubstring (sTmp, '#organizationName#','<b>'+objPerson.organizationName+'</b>', false);  
     } else {
        sTmp =  replaceSubstring (sTmp, '#orpanizationName#','', false);          
     }

     var WordToReplace = Update_Sentences('DisplayPerson_Tel', sLanguage);
     sTmp =  replaceSubstring (sTmp, '$tel$',  WordToReplace, false);
     if (( objPerson != null) && ( objPerson.organizationName != null)) {
        if ( objPerson.more.isActive == true) {
           sTmp =  replaceSubstring (sTmp, '#tel#','<b>'+objPerson.workPhoneNumber+'</b>', false); 
        } else {
           sTmp =  replaceSubstring (sTmp, '#tel#','<b><s>'+objPerson.workPhoneNumber+'</s></b>', false); 
        }
     } else {
        sTmp =  replaceSubstring (sTmp, '#tel#','', false);          
     }


     var WordToReplace = Update_Sentences('DisplayPerson_Email', sLanguage);
     sTmp =  replaceSubstring (sTmp, '$email$',  WordToReplace, false);
     if (( objPerson != null) && ( objPerson.organizationName != null)) {
        if ( objPerson.more.isActive == true) {
           sTmp =  replaceSubstring (sTmp, '#email#','<b>'+objPerson.email.toLowerCase()+'</b>', false); 
        } else {
           sTmp =  replaceSubstring (sTmp, '#email#','<b><s>'+objPerson.email.toLowerCase()+'</s></b>', false); 
        }
     } else {
        sTmp =  replaceSubstring (sTmp, '#email#','', false);          
     }

     var WordToReplace = Update_Sentences('DisplayPerson_WorkAddress', sLanguage);
     sTmp =  replaceSubstring (sTmp, '$workAddress$',  WordToReplace, false);
     if (( objPerson != null) && ( objPerson.workAddress != null)) {
        sTmp =  replaceSubstring (sTmp, '#workAddress#','<b>'+objPerson.workAddress+'</b>', false);  
     } else {
        sTmp =  replaceSubstring (sTmp, '#workAddress#','', false);          
     }

     var WordToReplace = Update_Sentences('DisplayPerson_Manager', sLanguage);
     sTmp =  replaceSubstring (sTmp, '$manager$',  WordToReplace, false);
     if (( objPerson != null) &&  ( objPerson.manager.title != null)) {
        sTmp =  replaceSubstring (sTmp, '#manager#','<b>'+objPerson.manager.title+'</b>', false);  
     } else {
        sTmp =  replaceSubstring (sTmp, '#manager#','', false);          
     }

  } catch(e) {
     alert('DisplayPersonDetail(...)   Erreur '+ e.stack);
  }
  return(sTmp);
}

function replaceSubstring (inputString, badString,
                          goodString, caseSensitive) {
  fixedReplace = "";
  UI = inputString;
  UB = badString;
  if ((caseSensitive != 1) && (caseSensitive != true)) {
  UI = inputString.toUpperCase();
     UB = badString.toUpperCase();
     }
  badEnd = -1;
  badLoc = UI.indexOf(UB);
  if (badLoc != -1) {
     for (x=1; (badLoc != -1); x++) {
        fixedReplace = fixedReplace + 
                       inputString.substring((badEnd +
                       1), badLoc) + goodString
        badEnd = badLoc + UB.length - 1;
        badLoc = UI.indexOf(UB, (badLoc + 1)); }
     fixedReplace = fixedReplace + 
                    inputString.substring((badEnd + 1),
                    inputString.length); }
     else { fixedReplace = inputString;    }
return fixedReplace;
}