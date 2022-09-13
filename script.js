import modulesConst from './modules/constans.js';
import modulesTable from './modules/eventsTable.js';
import modulesForm from './modules/eventsForm.js';

const {
    btnAdd,
    overlayModal,
    btnClose,
    modalForm,
    tBody,
    tHead,
    arrayTr,
    formModal,
    checkModal,
    inputModalSale,
    modalID,
    totalPriceModal,
    inputModalPrice,
    inputModalCount,
    totalPriceHeader,
    totalPriceArray, 
    ID,
    totalPriceALL,         
} = modulesConst;

const {
    calculationTotalPriceTable,
    openModal,
    deleteTr,
    createRow,    
} = modulesTable;

const {
    closeModal,
    checkboxInput,
    sendingForm,
    calculationTotalPrice,
    focusInputForm,    
} = modulesForm;


{
//функция запуска всех функций INIT
  const init = () => {

    calculationTotalPriceTable();
    openModal();
    deleteTr();

    closeModal();
    checkboxInput();
    sendingForm();
    focusInputForm();
  }
  
  window.CRMinit = init;
}


