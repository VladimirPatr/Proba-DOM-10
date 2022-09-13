import modulesConst from 'constans.js';
import modulesTable from 'eventsTable.js';

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


//закрытие модального окна и оверлея
const closeModal = () => {
overlayModal.addEventListener('click', e => {
    const target = e.target;
    if (target === overlayModal || target.closest('.close')) {
        overlayModal.classList.remove('visible');
    };
});
};

//чекбокс и инпут в модальном окне
const checkboxInput = () => {
checkModal.addEventListener('change', (e) => {
  if (e.target.checked) {
    inputModalSale.disabled = false;
  } else {
    inputModalSale.disabled = true;
    inputModalSale.value = " ";
  };
});
};


  //функция событий при отправке форме
  const sendingForm = () => {
  formModal.addEventListener('submit', e => {
    e.preventDefault();
   
    const formData = new FormData(e.target);

    const newProduct = Object.fromEntries(formData);

    tBody.append(createRow(newProduct));
    form.reset();
    overlayModal.classList.remove('visible');
    calculationTotalPriceTable();

  });
};
  

  //расчет общей стоимости на форме при изменнии инпутов
  const calculationTotalPrice = () => {
      if (inputModalPrice !== ' ' & inputModalCount !== ' '){
        let totalPrice = inputModalPrice.value*inputModalCount.value;
        if (inputModalSale.value == 'METHED'){
          totalPrice -= totalPrice/10;       
      };
      totalPriceModal.textContent = totalPrice;
    };
  };

//события при изменении фокуса инпутов формы
const focusInputForm = () => {
  inputModalPrice.addEventListener('blur', e => {
    calculationTotalPrice();
  });

  inputModalCount.addEventListener('blur', e => {
    calculationTotalPrice();
  });

  inputModalSale.addEventListener('blur', e => {
    calculationTotalPrice();
  });
};



export default {
    closeModal,
    checkboxInput,
    sendingForm,
    calculationTotalPrice,
    focusInputForm,
  };