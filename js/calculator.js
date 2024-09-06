const OPERATION = {
   sum: '+',
   substract: '-',
   multiplay: '*',
   division: '/',
};

function calculate({ a, b, operation }) {
   let result = null;

   switch (operation) {
      case OPERATION.sum:
         result = sum(a, b);
         break;

      case OPERATION.sum:
         result = substract(a, b);
         break;

      case OPERATION.multiplay:
         result = multiplay(a, b);
         break;

      case OPERATION.division:
         result = division(a, b);
         break;

      default:
         break;
   }

   return result;
}