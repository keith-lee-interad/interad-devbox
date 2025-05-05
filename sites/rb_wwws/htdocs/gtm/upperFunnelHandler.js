/*
uppderFunnelHandler.js
- v1.5
- load this code after "ga4EcomInfo"
- handles upper funnel events for static placements
- view_promotion
- selection_promotion
- view_item_list
- view_item
- select_item

- Change log
- v1.4
- remove promotion handler for mortgages (temporary)
- v1.5
- add promotion handler for all lobs
- v1.6
- updated logic to add click handler without ga4EcomInfo defined
*/
 
$(document).ready(function () {
 
    // Fetch items.json
    $.getJSON("/gtm/items.json", function (json) {

        console.log("items.json loaded...");

        // EVENT: view_promotion
        if (typeof ga4EcomInfo != 'undefined' && ga4EcomInfo.view_promotion) {
            console.log("view_promotion-----------");
            var items = [];

            // key: promotion_id
            // value: location_id
            for (const [key, value] of Object.entries(ga4EcomInfo.view_promotion)) {
                var item = {
                    promotion_id: key,
                    location_id: value,
                    item_id: "i_00000",
                    affiliation: "html",
                    price: 0,
                    quantity: 1
                };
                items.push(item);
                console.log(key);
            }

            // dataLayer push
            if (items.length != 0) {
                console.log("sending view_promotion event to dataLayer...");
                dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
                dataLayer.push({
                    event: "view_promotion",
                    details: "",
                    ecommerce: {
                        items: items
                    }
                });
            }
            else console.log(`WARNING!! upperFunnelEventHandler.js: view_promotion: the list is empty`);
        }


        // EVENT: view_item_list
        if (typeof ga4EcomInfo != 'undefined' && ga4EcomInfo.view_item_list) {
            console.log('view_item_list-----------');
            var items = [];

            for (i in ga4EcomInfo.view_item_list) {

                // Error handling: item_id not found
                if (!json[ga4EcomInfo.view_item_list[i]]) {
                    console.log(`ERROR!! upperFunnelEventHandler.js: view_item_list: item_id "${ga4EcomInfo.view_item_list[i]}" not found`);
                    return;
                }

                // Create items
                var item = {
                    item_id: ga4EcomInfo.view_item_list[i],
                    item_name: json[ga4EcomInfo.view_item_list[i]].item_name,
                    price: json[ga4EcomInfo.view_item_list[i]].price,
                    quantity: 1
                };
                items.push(item);
                console.log(ga4EcomInfo.view_item_list[i]);
            }

            // dataLayer push
            if (items.length != 0) {
                console.log("sending view_item_list event to dataLayer...");
                dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
                dataLayer.push({
                    event: "view_item_list",
                    details: "",
                    ecommerce: {
                        items: items
                    }
                });
            }
            else console.log(`WARNING!! upperFunnelEventHandler.js: view_item_list: the list is empty`);

        }

        // EVENT: view_item
        if (typeof ga4EcomInfo != 'undefined' && ga4EcomInfo.view_item) {
            console.log('view_item----------------');
            var items = [];

            for (i in ga4EcomInfo.view_item) {

                // Error handling: item_id not found
                if (!json[ga4EcomInfo.view_item[i]]) {
                    console.log(`ERROR!! upperFunnelEventHandler.js: view_item: item_id "${ga4EcomInfo.view_item[i]}" not found`);
                    return;
                }

                // Create items
                var item = {
                    item_id: ga4EcomInfo.view_item[i],
                    item_name: json[ga4EcomInfo.view_item[i]].item_name,
                    price: json[ga4EcomInfo.view_item[i]].price,
                    quantity: 1
                };
                items.push(item);
                console.log(ga4EcomInfo.view_item[i]);
            }

            // dataLayer push
            if (items.length != 0) {
                console.log("sending view_item event to dataLayer...");
                dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
                dataLayer.push({
                    event: "view_item",
                    details: "",
                    ecommerce: {
                        items: items
                    }
                });
            }
            else console.log(`WARNING!! upperFunnelEventHandler.js: view_item: the list is empty`);
        }

        // EVENT: select_item
        $(document).on("click", "[data-select-item]", function() {
            if(!$(this).prop("disabled")) {
                var item_id = $(this).data("select-item");
                var details = $(this).data("item-details");
                var possibleDetails = ["begin_checkout", "select_item", "call", "visit", "signin", "specialist"];

                // Error handling: item_id not found
                if (!json[item_id]) {
                    console.log(`ERROR!! upperFunnelEventHandler.js: select_item: item_id "${item_id}" not found`);
                    return;
                }

                // Error handling: invalid or missing details
                if (possibleDetails.indexOf(details) == -1) {
                    console.log(`ERROR!! upperFunnelEventHandler.js: select_item: details "${details}" is invalid or missing`);
                    return;
                }

                // dataLayer push
                console.log("sending select_item event to dataLayer...")
                dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
                dataLayer.push({
                    event: "select_item",
                    details: "select_item - " + details,
                    ecommerce: {
                        items: [
                            {
                                item_id: item_id,
                                item_name: json[item_id].item_name,
                                price: json[item_id].price,
                                quantity: 1
                            }
                        ]
                    }
                });
            }
        });

        // EVENT: select_promotion
        $(document).on("click", "[data-select-promotion]", function() {
            var promoId = $(this).data("select-promotion");

            // Error handling: location_id not defined
            if (!ga4EcomInfo.view_promotion || !ga4EcomInfo.view_promotion[promoId]) {
                console.log(`ERROR!! upperFunnelEventHandler.js: select_promotion: location_id "${promoId}" not defined`);
                return;
            }
            
            console.log("sending select_promotion event to dataLayer...");
            dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
            dataLayer.push({
                event: "select_promotion",
                details: "",
                ecommerce: {
                    items: [
                        {
                            promotion_id: promoId,
                            location_id: ga4EcomInfo.view_promotion[promoId],
                            item_id: "i_00000",
                            affiliation: "html",
                            price: 0,
                            quantity: 1
                        }
                    ]
                }
            });

        });
        

    })
    .fail(function () {
        // Error handling: empty data-attribute
        console.log("ERROR!! upperFunnelEventHandler.js: getJSON: failed to load items.json");
        return;
    });
    

});
