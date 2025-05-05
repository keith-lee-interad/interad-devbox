var main = document.getElementsByTagName("main")[0];
var sideMenu = document.getElementsByClassName("side-menu")[0];
var path = document.location.pathname;

function tagUpperFunnelPromotion(url, promoId) {
    document.querySelectorAll(`a[href*="${url}"]`).forEach(e => {
        if (main.contains(e) && ((sideMenu && !sideMenu.contains(e)) || !sideMenu)) {
            e.setAttribute("data-select-promotion", promoId);
            console.log("tagUpperFunnelPromotion: " + promoId);
        }
    })
}

function tagUpperFunnelBeginCheckout(url, itemId) {
    document.querySelectorAll(`a[href*="${url}"]`).forEach(e => {
        if (main.contains(e) && ((sideMenu && !sideMenu.contains(e)) || !sideMenu)) {
            var finalId = itemId;

            // investments, di, investease
            if (url.indexOf("/discovery/") !== -1 && itemId == "") {
                if (path.indexOf("/tfsa.html") !== -1 || path.indexOf("/celi.html") !== -1) finalId = "tfsa_iea";
                else if (path.indexOf("/rrsp.html") !== -1 || path.indexOf("/reer.html") !== -1) finalId = "rrsp_iea";
                else if (path.indexOf("/fhsa.html") !== -1 || path.indexOf("/celiapp.html") !== -1) finalId = "tfsa_iea";
                else if (path.indexOf("/non-registered-account.html") !== -1 || path.indexOf("/compte-non-enregistre.html") !== -1) finalId = "nonr_iea";
                else finalId = "iea";
            }
            else if ((url.indexOf("/investments/invest-now.html") !== -1 || url.indexOf("/fr/placements/investissez-maintenant.html") !== -1) && itemId == "") {
                if (e.href.indexOf("tab=tfsa") !== -1) finalId = "tfsa_ia";
                else if (e.href.indexOf("tab=rrsp") !== -1) finalId = "rrsp_ia";
                else if (e.href.indexOf("tab=resp") !== -1) finalId = "resp_ia";
                else if (e.href.indexOf("tab=rrif") !== -1) finalId = "rrif_ia";
                else if (e.href.indexOf("tab=rdsp") !== -1) finalId = "rdsp_ia";
                else if (e.href.indexOf("tab=gic") !== -1) finalId = "gics_ia";
                else if (e.href.indexOf("tab=mutualfunds") !== -1) finalId = "mfd_ia";
                else if (e.href.indexOf("tab=savingsdeposit") !== -1) finalId = "sd_ia";
                else finalId = "ia";
            }
            else if ((url.indexOf("/open-an-account.html") !== -1 || url.indexOf("/ouvrir-un-compte.html") !== -1) && itemId == "") {
                if (e.href.indexOf("AcctType=tfsa") !== -1 || e.href.indexOf("AcctType=TFSA") !== -1) finalId = "tfsa_dia";
                else if (e.href.indexOf("AcctType=rrsp") !== -1 || e.href.indexOf("AcctType=RRSP") !== -1) finalId = "rrsp_dia";
                else if (e.href.indexOf("AcctType=resp") !== -1 || e.href.indexOf("AcctType=RESP") !== -1) finalId = "resp_dia";
                else if (e.href.indexOf("AcctType=rrif") !== -1 || e.href.indexOf("AcctType=RRIF") !== -1) finalId = "rrif_dia";
                else if (e.href.indexOf("AcctType=invs") !== -1 || e.href.indexOf("AcctType=INVS") !== -1) finalId = "nonr_dia";
                else if (e.href.indexOf("AcctType=fhsa") !== -1 || e.href.indexOf("AcctType=FHSA") !== -1) finalId = "fhsa_dia";
                else finalId = "dia";   
            }
            else if ((url.indexOf("/apps/account-open/") !== -1 || url.indexOf("/cgi-bin/apply/account/open-account.cgi") !== -1) && itemId == "") {
                if (e.href.indexOf("pid1=012") !== -1 || e.href.indexOf("/012/") !== -1) finalId = "012";
                else if (e.href.indexOf("pid1=027") !== -1 || e.href.indexOf("/027/") !== -1) finalId = "027"
                else finalId = "029";
            }

            // more lobs...

            if (finalId !== "") {
                e.setAttribute("data-select-item", finalId);
                e.setAttribute("data-item-details", "begin_checkout")
                console.log("tagUpperFunnelBeginCheckout: " + finalId);
            }
        }
    })
}

function tagUpperFunnelDetails(url, itemId) {
    document.querySelectorAll(`a[href*="${url}"]`).forEach(e => {
        if (main.contains(e) && ((sideMenu && !sideMenu.contains(e)) || !sideMenu)) {
            e.setAttribute("data-select-item", itemId)
            e.setAttribute("data-item-details", "select_item")
            console.log("tagUpperFunnelDetails: " + itemId);
        }
    })
}

// function tagUpperFunnelCall(url, itemId) {
//     document.querySelectorAll(`.${url}`).forEach(e => {
//         if (main.contains(e) && ((sideMenu && !sideMenu.contains(e)) || !sideMenu)) {
//             e.setAttribute("data-select-item", itemId)
//             e.setAttribute("data-item-details", "call")
//             console.log("tagUpperFunnelCall: " + itemId);
//         }
//     })
// }

function tagUpperFunnelCall(url, itemId) {
    document.querySelectorAll(`a[href*="${url}"]`).forEach(e => {
        if (main.contains(e) && ((sideMenu && !sideMenu.contains(e)) || !sideMenu)) {
            e.setAttribute("data-select-item", itemId)
            e.setAttribute("data-item-details", "call")
            console.log("tagUpperFunnelCall: " + itemId);
        }
    })
}

function tagUpperFunnelVisit(url, itemId) {
    document.querySelectorAll(`a[href*="${url}"]`).forEach(e => {
        if (main.contains(e) && ((sideMenu && !sideMenu.contains(e)) || !sideMenu)) {
            e.setAttribute("data-select-item", itemId)
            e.setAttribute("data-item-details", "visit")
            console.log("tagUpperFunnelVisit: " + itemId);
        }
    })
}

function tagUpperFunnelSignin(url, itemId) {
    document.querySelectorAll(`a[href*="${url}"]`).forEach(e => {
        if (main.contains(e) && ((sideMenu && !sideMenu.contains(e)) || !sideMenu)) {
            e.setAttribute("data-select-item", itemId)
            e.setAttribute("data-item-details", "signin")
            console.log("tagUpperFunnelSignin: " + itemId);
        }
    })
}

function tagUpperFunnelSpecialist(url, itemId) {
    document.querySelectorAll(`a[href*="${url}"]`).forEach(e => {
        if (main.contains(e) && ((sideMenu && !sideMenu.contains(e)) || !sideMenu)) {
            e.setAttribute("data-select-item", itemId)
            e.setAttribute("data-item-details", "specialist")
            console.log("tagUpperFunnelSpecialist: " + itemId);
        }
    })
}