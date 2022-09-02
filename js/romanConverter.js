function romanConverter(integer) {
  if (!integer) return '';
  
  const MILLE = 1000;
  const CINQ_CENT = 500;
  const CENT = 100;
  const CINQUANTE = 50;
  const DIX = 10;
  const CINQ = 5;
  const UN = 5;

  let number = integer;
  let romanNumber = []

  while (number > 0) {
		//if (number - MILLE >= 0) {
		//	romanNumber = [...romanNumber, 'M'];
		//	number -= MILLE;
		//}
		//
		//if (number - CINQ_CENT >= 0) {
		//	romanNumber = [...romanNumber, 'D'];
		//	number -= CINQ_CENT;
		//}
		//
		//if (number - CENT >= 0) {
		//	romanNumber = [...romanNumber, 'C'];
		//	number -= CENT;
		//}
		//
		//if (number - CINQUANTE >= 0) {
		//	romanNumber = [...romanNumber, 'L'];
		//	number -= CINQUANTE;
		//}
		//
		//if (number - DIX >= 0) {
		//	romanNumber = [...romanNumber, 'X'];
		//	number -= DIX;
		//}
		//
		//if (number - CINQ >= 0) {
		//	romanNumber = [...romanNumber, 'V'];
		//	number -= CINQ;
		//}

		if (number - UN >= 0) {
			romanNumber = [...romanNumber, 'I'];
			number -= UN;
		}
	}

  return romanNumber.join('');
}

module.exports = romanConverter;
