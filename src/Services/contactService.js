const apiService = require('./apiService');

const ContactService = {
    create:(data) => {
       return apiService.post("/contact", data)
       .then(result => result.data)
    }
    // getAllItems:(data) => {
    //     return apiService.get('/item', data)
    //     .then (result => result.data)
    // },
    // delete:(itemNumber) => {
    //     console.log(itemNumber)
    //     return apiService.delete(`/item/${itemNumber}`)
    //     .then (result=>result.data)
    // }

    //   delete item
//     deleteItem({ params }, res) {
//         data.findOneAndDelete({ _id: params.id })
//         .then(dbItemData => {
//         if (!dbItemData) {
//             res.status(404).json({ message: 'No Item found with this id!' });
//         return;
//       }
//       res.json(dbItemData);
//     })
//     .catch(err => res.status(400).json(err));
// }
    
}

module.exports = ItemService