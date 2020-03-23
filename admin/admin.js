const format = (d) => {
    return `
    <table>
    <tr>
        <td>Client:</td>
        <td>${d.userName}</td>
    </tr>
    <tr>
        <td>E-mail:</td>
        <td>${d.userEmail}</td>
    </tr>
    <tr>
        <td>Year:</td>
        <td>${d.year}</td>
    </tr>
    <tr>
        <td>Date:</td>
        <td>${d.date}</td>
    </tr>
    <tr>
        <td>Hour:</td>
        <td>${d.hour}</td>
    </tr>
    <tr>
        <td>Payment Method:</td>
        <td>${d.payment}</td>
    </tr>
    <tr>
        <td>Order:</td>
        <td>${d.order}</td>
    </tr>
    <tr>
        <td>ID:</td>
        <td>${d.id}</td>
    </tr>
    <tr>
        <td>Products:</td>
        <td>${d.products.map( (product)=> {
            return `<ul>
                      <li>${product.name}</li>
                      <li>${product.prce}</li>
                    </ul>`;
             })}</td>
    </tr>
</table> 
    `;
}

$(document).ready(function () {
    setTimeout( function () {
        var table = $('#tableOrders').DataTable({
            "data": final.data,
            select: "single",
            "columns": [
                {
                    "ClassName": 'details-control',
                    "orderable": true,
                    "data": null,
                    "defaultContent": '',
                    "render": function () {
                        return `<i class="fa fa-plus-square" aria-hidden="true"></i>`
                    },
                    width: "15px"
                },
                {"data":"id"},
                {"data":"order"},
                {"data":"date"},
                {"data":"userName"},
                {"data":"payment"},
                {"data":"total"}
            ],
            "order": [[1, 'desc']]
        });
        $('#tableOrders tbody').on('click', 'td.details-control', function () {
            var tr = $(this).closest('tr');
            var tdi = tr.find('i.fa');
            var row = table.row(tr);
            if (row.child.isShown()) {
                row.child.hide();
                tdi.first().removeClass('fa-minus-square');
                tdi.first().addClass('fa-plus-square');
            } else {
                row.child(format(row.data())).show();
                tr.addClass('shown');
                tdi.first().removeClass('fa-plus-square');
                tdi.first().addClass('fa-minus-square');
            }
        });
    },3000);
});

//firebase
var firebaseConfig = {
    apiKey: "AIzaSyCkHUFX2KMjkbTXf1KXFlZaDgiffEyj3TQ",
    authDomain: "knot-knot-kolors.firebaseapp.com",
    databaseURL: "https://knot-knot-kolors.firebaseio.com",
    projectId: "knot-knot-kolors",
    storageBucket: "knot-knot-kolors.appspot.com",
    messagingSenderId: "322674775984",
    appId: "1:322674775984:web:ca83afc31f6f865b4e6875"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  let order = firebase.database().ref('orders');

  order.on('value', (data) => {
      let orderValue = data.val();
      fsales(orderValue);
  });
  const fsales = (params) => {
      final.data.push(params);
  }

  let final = {
      "data": []
  }