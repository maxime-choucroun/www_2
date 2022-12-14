

function Load_Sentences(ArrayObj) { 

/*
      ArrayObj.push({  sId:'Title', sName:'Title', sAttributeName: 'innerHTML', 
                       sFr:  'Recherche dans Workplace',
                       sUs:  'Search on Workplace',
                       sPt:  'Pesquisar em Workplace',
                       sNl:  'Om te zoeken op',
                       sRu:  'Поиск по Workplace (Ru)',
                       sSp:  'Busquedar de Workplace'      }    );
*/                       

      ArrayObj.push({  sId:'Nbre_Resultats', sName:'Nbre_Resultats', sAttributeName: 'innerHTML', 
                       sFr:  'compte(s) trouv&eacute;(s)',
                       sUs:  'account(s) found',
                       sPt:  'conta(s) encontrado',
                       sNl:  'account(s) gevonden',
                       sRu:  'aккаунт(ы) найден(ы) (Ru)',
                       sSp:  'cantided de personas encontradas'      }    );

      ArrayObj.push({  sId:'Details', sName:'Details', sAttributeName: 'innerHTML', 
                       sFr:  'D&eacute;tails',
                       sUs:  'Details',
                       sPt:  'Detalhes',
                       sNl:  'Details',
                       sRu:  'подробности (Ru)',
                       sSp:  'Details'      }    );

      ArrayObj.push({  sId:'Name_Field', sName:'Name_Field', sAttributeName: 'placeholder', 
                       sFr:  'Insérer Nom à rechercher...',
                       sUs:  'Insert the Name to search...',
                       sPt:  'Insira o nome a Pesquisar',
                       sNl:  'Zoek op naam',
                       sRu:  'Вставьте имя (Ru)',
                       sSp:  'Escribir el apellido en línea de edición de entrada'
      }   );

      ArrayObj.push({  sId:'Button_Stop', sName:'Button_Stop', sAttributeName: '', 
                       sFr:  'Annulation. Pas de nom !!',
                       sUs:  'Abort. No name',
                       sPt:  'Cancelar. sem nome',
                       sNl:  'Breken. Geen naam',
                       sRu:  'имя не найдено',
                       sSp:  'Stop. No hay apellido'
      }   );


      ArrayObj.push({  sId:'Button_Search', sName:'Button_Search', sAttributeName: 'value', 
                       sFr:  'Recherche',
                       sUs:  'Search',
                       sPt:  'Procurar',
                       sNl:  'Search',
                       sRu:  'Поиск (Ru)',
                       sSp:  'Busquedar (Sp)'
      }   );

      ArrayObj.push({  sId:'Contact_Information', sName:'Contact_Information', sAttributeName: 'value', 
                       sFr:  'CONTACT',
                       sUs:  'CONTACT INFORMATION',
                       sPt:  'INFORMACOES DE CONTATO',
                       sNl:  'CONTACTGEGEVENS',
                       sRu:  'КОНТАКТЫ',
                       sSp:  'INFORMACION DEL CONTACTO (Sp)'
      }   );

      /* Display a person >>>>>>>>>>>>>>>>>>>>>>>>>>> */

      ArrayObj.push({  sId:'DisplayPerson_Name', sName:'DisplayPerson_Name', sAttributeName: 'value', 
                       sFr:  'Nom',
                       sUs:  'Name',
                       sPt:  'Nome',
                       sNl:  'Naam',
                       sRu:  'имя',
                       sSp:  'Apellido'
      }   );

      ArrayObj.push({  sId:'DisplayPerson_Title', sName:'DisplayPerson_Title', sAttributeName: 'value', 
                       sFr:  'Titre',
                       sUs:  'Title',
                       sPt:  'Título',
                       sNl:  'Titel',
                       sRu:  'должность',
                       sSp:  'Title (Sp)'
      }   );

      ArrayObj.push({  sId:'DisplayPerson_DepartmentName', sName:'DisplayPerson_Departement', sAttributeName: 'value', 
                       sFr:  'D&eacute;partement',
                       sUs:  'Department Name',
                       sPt:  'Departamento',
                       sNl:  'Afdeling',
                       sRu:  'департамент',
                       sSp:  'Department (Sp)'
      }   );

      ArrayObj.push({  sId:'DisplayPerson_DivisionName', sName:'DisplayPerson_DivisionName', sAttributeName: 'value', 
                       sFr:  'Division',
                       sUs:  'Division Name',
                       sPt:  'Divisão',
                       sNl:  'Divisie',
                       sRu:  'отдел',
                       sSp:  'Division (Sp)'
      }   );

      ArrayObj.push({  sId:'DisplayPerson_OrganizationName', sName:'DisplayPerson_OrganizationName', sAttributeName: 'value', 
                       sFr:  'Organisation',
                       sUs:  'Organization',
                       sPt:  'Organização',
                       sNl:  'Organisatie',
                       sRu:  'организация',
                       sSp:  'Organisation (Sp)'
      }   );

      ArrayObj.push({  sId:'DisplayPerson_Tel', sName:'DisplayPerson_Tel', sAttributeName: 'value', 
                       sFr:  'Tel ',
                       sUs:  'Phone ',
                       sPt:  'Telefone',
                       sNl:  'Telefoon',
                       sRu:  'Телефон (Ru)',
                       sSp:  'Phone (Sp)'
      }   );


      ArrayObj.push({  sId:'DisplayPerson_Email', sName:'DisplayPerson_Email', sAttributeName: 'value', 
                       sFr:  'Email',
                       sUs:  'Email',
                       sPt:  'Email',
                       sNl:  'Email',
                       sRu:  'Эл. адрес',
                       sSp:  'Email (Sp)'
      }   );

      ArrayObj.push({  sId:'DisplayPerson_WorkAddress', sName:'DisplayPerson_WorkAddress', sAttributeName: 'value', 
                       sFr:  'Localisation',
                       sUs:  'Location',
                       sPt:  'Localização',
                       sNl:  'Plaats',
                       sRu:  'Место нахождения',
                       sSp:  'Location (Sp)'
      }   );

      ArrayObj.push({  sId:'DisplayPerson_Manager', sName:'DisplayPerson_Manager', sAttributeName: 'value', 
                       sFr:  'Manager',
                       sUs:  'Manager',
                       sPt:  'Manager',
                       sNl:  'Manager',
                       sRu:  'Менеджер',
                       sSp:  'Manager (Sp)'
      }   );

      ArrayObj.push({  sId:'DisplayPerson_Existed', sName:'DisplayPerson_Existed', sAttributeName: 'value', 
                       sFr:  '(compte d&eacute;sactiv&eacute;)',
                       sUs:  '(deactivated account)',
                       sPt:  '(conta desativada) (Pt)',
                       sNl:  '(gedeactiveerd account)',
                       sRu:  '(деактивированный аккаунт)',
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

  sTmp = sTmp + "<div class=\"col py-1 \" >" 
  sTmp = sTmp + "<div class=\"row border-bottom no-gutters \" style=\"margin-top: 10px;\" >" 
  sTmp = sTmp + "<div class=\"col text-secondary \">$Contact_Information$</div>"
  sTmp = sTmp + "</div>"
  sTmp = sTmp + "</div>"

  sTmp = sTmp + "<div class=\"col py-1\">" 
  sTmp = sTmp + "   <div class=\"row border-bottom no-gutters \">"
  sTmp = sTmp + "      <div class=\"col-4 text-secondary \">$nom$</div>"
  sTmp = sTmp + "      <div class=\"col text-dark \">#nom#</div>"
  sTmp = sTmp + "   </div>"
  sTmp = sTmp + "</div>"

  sTmp = sTmp + "<div class=\"col py-1\">" 
  sTmp = sTmp + "   <div class=\"row border-bottom no-gutters \">"
  sTmp = sTmp + "      <div class=\"col-4 text-secondary \">$title$</div>"
  sTmp = sTmp + "      <div class=\"col text-dark \">#title#</div>"
  sTmp = sTmp + "   </div>"
  sTmp = sTmp + "</div>"

  sTmp = sTmp + "<div class=\"col py-1\">" 
  sTmp = sTmp + "   <div class=\"row border-bottom no-gutters \">"
  sTmp = sTmp + "      <div class=\"col-4 text-secondary \">$departmentName$</div>"
  sTmp = sTmp + "      <div class=\"col text-dark \">#departmentName#</div>"
  sTmp = sTmp + "   </div>"
  sTmp = sTmp + "</div>"

  sTmp = sTmp + "<div class=\"col py-1\">" 
  sTmp = sTmp + "   <div class=\"row border-bottom no-gutters \">"
  sTmp = sTmp + "      <div class=\"col-4 text-secondary \">$divisionName$</div>"
  sTmp = sTmp + "      <div class=\"col text-dark \">#divisionName#</div>"
  sTmp = sTmp + "   </div>"
  sTmp = sTmp + "</div>"

  sTmp = sTmp + "<div class=\"col py-1\">" 
  sTmp = sTmp + "   <div class=\"row border-bottom no-gutters \">"
  sTmp = sTmp + "      <div class=\"col-4 text-secondary \">$organizationName$</div>"
  sTmp = sTmp + "      <div class=\"col text-dark \">#organizationName#</div>"
  sTmp = sTmp + "   </div>"
  sTmp = sTmp + "</div>"

  sTmp = sTmp + "<div class=\"col py-1\">" 
  sTmp = sTmp + "   <div class=\"row border-bottom no-gutters \">"
  sTmp = sTmp + "      <div class=\"col-4 text-secondary \">$tel$</div>"
  sTmp = sTmp + "      <div class=\"col text-dark \">#tel#</div>"
  sTmp = sTmp + "   </div>"
  sTmp = sTmp + "</div>"

  sTmp = sTmp + "<div class=\"col py-1\">" 
  sTmp = sTmp + "   <div class=\"row border-bottom no-gutters \">"
  sTmp = sTmp + "      <div class=\"col-4 text-secondary \">$email$</div>"
  sTmp = sTmp + "      <div class=\"col text-dark \">#email#</div>"
  sTmp = sTmp + "   </div>"
  sTmp = sTmp + "</div>"

  sTmp = sTmp + "<div class=\"col py-1\">" 
  sTmp = sTmp + "   <div class=\"row border-bottom no-gutters \">"
  sTmp = sTmp + "      <div class=\"col-4 text-secondary \">$workAddress$</div>"
  sTmp = sTmp + "      <div class=\"col text-dark \">#workAddress#</div>"
  sTmp = sTmp + "   </div>"
  sTmp = sTmp + "</div>"

  sTmp = sTmp + "<div class=\"col py-1 \" style=\"margin-bottom: 20px;\" >" 
  sTmp = sTmp + "   <div class=\"row border-bottom no-gutters \">"
  sTmp = sTmp + "      <div class=\"col-4 text-secondary \">$manager$</div>"
  sTmp = sTmp + "      <div class=\"col text-dark \">#manager#</div>"
  sTmp = sTmp + "   </div>"
  sTmp = sTmp + "</div>"

  try {

     var WordToReplace = Update_Sentences('Contact_Information', sLanguage);
     sTmp =  replaceSubstring (sTmp, '$Contact_Information$',  WordToReplace, false);
   
     var WordToReplace = Update_Sentences('DisplayPerson_Name', sLanguage);
     sTmp =  replaceSubstring (sTmp, '$nom$',  WordToReplace, false);
     if (( objPerson != null) && ( objPerson.name.name != null)) {
        if ( objPerson.more.isActive == true) {
           sTmp =  replaceSubstring (sTmp, '#nom#',objPerson.name.name+'', false);    
           sTmp =  replaceSubstring (sTmp, '#nom#',+objPerson.name.name+'', false); 
           sTmp =  replaceSubstring (sTmp, '$DisplayPerson_Existed$','', false);            
        } else {
           sTmp =  replaceSubstring (sTmp, '#nom#','<s>'+objPerson.name.name+'</s>', false); 
           sTmp =  replaceSubstring (sTmp, '#nom#',''+objPerson.name.name+'', false); 
           var WordToReplace = Update_Sentences('DisplayPerson_Existed', sLanguage);
           sTmp =  replaceSubstring (sTmp,'$DisplayPerson_Existed$',WordToReplace, false);      
        }
     } else {
        sTmp =  replaceSubstring (sTmp, '#nom#','', false);          
     }

     var WordToReplace = Update_Sentences('DisplayPerson_Title', sLanguage);
     sTmp =  replaceSubstring (sTmp, '$title$',  WordToReplace, false);
     if (( objPerson != null) && ( objPerson.name.title != null)) {
        sTmp =  replaceSubstring (sTmp, '#title#',''+objPerson.name.title+'', false);  
     } else {
        sTmp =  replaceSubstring (sTmp, '#title#','', false);          
     }

     var WordToReplace = Update_Sentences('DisplayPerson_DepartmentName', sLanguage);
     sTmp =  replaceSubstring (sTmp, '$departmentName$',  WordToReplace, false);
     if (( objPerson != null) && ( objPerson.departmentName != null)) {
        sTmp =  replaceSubstring (sTmp, '#departmentName#',''+objPerson.departmentName+'', false);  
     } else {
        sTmp =  replaceSubstring (sTmp, '#departmentName#','', false);          
     }

     var WordToReplace = Update_Sentences('DisplayPerson_DivisionName', sLanguage);
     sTmp =  replaceSubstring (sTmp, '$divisionName$',  WordToReplace, false);
     if (( objPerson != null) && ( objPerson.divisionName != null)) {
        sTmp =  replaceSubstring (sTmp, '#divisionName#',''+objPerson.divisionName+'', false);  
     } else {
        sTmp =  replaceSubstring (sTmp, '#divisionName#','', false);          
     }

     var WordToReplace = Update_Sentences('DisplayPerson_OrganizationName', sLanguage);
     sTmp =  replaceSubstring (sTmp, '$organizationName$',  WordToReplace, false);
     if (( objPerson != null) && ( objPerson.organizationName != null)) {
        sTmp =  replaceSubstring (sTmp, '#organizationName#',''+objPerson.organizationName+'', false);  
     } else {
        sTmp =  replaceSubstring (sTmp, '#organizationName#','', false);          
     }

     var WordToReplace = Update_Sentences('DisplayPerson_Tel', sLanguage);
     sTmp =  replaceSubstring (sTmp, '$tel$',  WordToReplace, false);
     if (( objPerson != null) && ( objPerson.organizationName != null)) {
        if ( objPerson.more.isActive == true) {
           sTmp =  replaceSubstring (sTmp, '#tel#',''+objPerson.workPhoneNumber+'', false); 
        } else {
           sTmp =  replaceSubstring (sTmp, '#tel#','<s>'+objPerson.workPhoneNumber+'</s>', false); 
        }
     } else {
        sTmp =  replaceSubstring (sTmp, '#tel#','', false);          
     }

     var WordToReplace = Update_Sentences('DisplayPerson_Email', sLanguage);
     sTmp =  replaceSubstring (sTmp, '$email$',  WordToReplace, false);
     if (( objPerson != null) && ( objPerson.organizationName != null)) {
        if ( objPerson.more.isActive == true) {
           sTmp =  replaceSubstring (sTmp, '#email#',''+objPerson.email.toLowerCase()+'', false); 
        } else {
           sTmp =  replaceSubstring (sTmp, '#email#','<s>'+objPerson.email.toLowerCase()+'</s>', false); 
        }
     } else {
        sTmp =  replaceSubstring (sTmp, '#email#','', false);          
     }

     var WordToReplace = Update_Sentences('DisplayPerson_WorkAddress', sLanguage);
     sTmp =  replaceSubstring (sTmp, '$workAddress$',  WordToReplace, false);
     if (( objPerson != null) && ( objPerson.workAddress != null)) {
        sTmp =  replaceSubstring (sTmp, '#workAddress#',''+objPerson.workAddress+'', false);  
     } else {
        sTmp =  replaceSubstring (sTmp, '#workAddress#','', false);          
     }

     var WordToReplace = Update_Sentences('DisplayPerson_Manager', sLanguage);
     sTmp =  replaceSubstring (sTmp, '$manager$',  WordToReplace, false);
     if (( objPerson != null) &&  ( objPerson.manager.title != null)) {
        sTmp =  replaceSubstring (sTmp, '#manager#',''+objPerson.manager.title+'', false);  
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