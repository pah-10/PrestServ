/**
 * jsPopupBox - static functions form modal dialogs 
 * @type Object 
 */
var jsPopupBox = {};

jsPopupBox.imgOk = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJJREFUeNrkl01IFGEYx/8zbmOxGJkVfXjQQ1KKnjx4MTL7MCLPXZcoRZIOkllhh7TEQg9Cghl47Vh6MTQQRddqokwM84NdLSsT+gLFTXen55mPZZ2dWXZXXQ+98IdnXt6d3/953q9ZQVEUbGUTscVtyw0kokmnG6GwOE44/Pg9KD+XH6riOJEmpCICzi81K486oYrjogSZUOFzS/VKO8O7NHHMfaEmhE2C+zqu3kJP3121Q9CXOu94kVRSXIuLLXXorkayYzPg7ZVV6O0neBLBQ1IUKXaQHj+rM0w5N9KAdILgrZUV6BtqgmIFJ6jnBzA0Czy/hgLbc6C0OeapUeEtV1wYGG5FgOCcvSJqEihO2gZ4fxHco8KP0Yg50qKVAcm3gsCZ6PetCm+quAC33KGVPUlPjSRS7CD4DGU+OBWEkw18J/01T4FUTC+rLz+vPqz6u3wvbiKZB0aCN1SUQn73RIOay04GZhYIPknw6rVwHuMww+vKT2FkpEvt4BjosTMRHD862mkPJ9TghDU8dBtKJ+lltWWFmBwfgHFB8iI6fKQQd9oGYDKhwm+HjreCzxN83B5uGJDO3oev5nI+pj/K8AfCb6uMrHw0tMno1UyAzd4oy4d3QkbAfLsxnOo6843gHyLDjSlwcqZ9gzIy9tOq9QOBkE8EBninZVRdyoHfP+bjPo65L2BawqKoZe75CgyPEfx6ZLhRgVRSVkkjhgtyKdsDtPhW15owBu5Nz1Tjhc8eKDaZexk+CnRHAQ9OAWkfKZNM9BfkkYmDvAPIhLm+imnlmDL3fiH4++jh0I4LEArLpJWpXjzdngdXihPYvYt4gs4UdOl7O/gs6Puc5zwOuGEAYSZydROpFias4HSmuUdih4casDaRYlMJU+but/HBzQbCTeToJkyVWJP5m/jhVgbCTWTD5WQTaZoBvkb5bPd+ojl/TfCa+OF2BsJM7MjWKpG2h37AmdN1+vLV+uGRDIRX4ihcO2k9/P5DZXdvDDzqu56UTio89wAKi2O9b90fl0IMJviwOqQ/z21U5kKMlXDq8eJmlz1hTfjv/x3/E2AAiUiGJwNYbv8AAAAASUVORK5CYII=";
jsPopupBox.imgCancel = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA7tJREFUeNqsV2tIFFEUPjuuuq2tr3xgimGulo9SMiRLzSiJFMIiyQgpA4UEIwqiH/nLIOmHRIFFQg/8kVGUBRlloqmkiIiSz901syi1bJVdXffhrt077sg+Zu/dWb1wdufOnPN9333MuWcA+JtPZ07qCjZ8DZ43j3DYIE1nC2vrEOERzmpQ6/uVn7kJrOFrD0QIx6nZHRuGHeY/vlkL4gzfEyDCRwiOCP9UJ8eEZ4YETCdfq4SFO5W8qJsvV8Hg7SrIbOv3RV0jgdwgBEfEBSVduQ662pvEoUnLb8BQTbUrER7hMKjvh2+umEwgYryItvTgFiRWXAVM5LAcLDl+hn1oOJjL2vzwDAQhi0cA3YkXL4Gh/h51kX2LK2D4/l1uJlhBHsTuQ12FyDqSMGQxCKg9obQcTM8fUoG8T5fBSF0tey00BpFno+4Esj8ibgptRew8XwrmxqdUQI3Rwv77+zBUX6+CczD6pM6OnNuEwCuiuAQs7xpgIxqTXwSj9Y+dyNdeQ1cidpwpBmh+tT723JMw9qyel5xPgLOIwiJgPjd5xG05mAdjLxpckrsS4CQi/sQpEHd9EkS+nHEEFK9fEslJApxFHC8A7952t8hNe7NB8baRSo6bmIBjtAauJhyzmU0ibjXka22/SOS0GVjLcHFHj4FkpE/QEugT9oDyw3va2UFeAkwefzgXJONDHm1CfWwSKFqaiSJExJHnHALpD+W63kJddBwo21pdihDx1QXpwbKZuKws8Jua3JBEtBixDZQdHbwi7ARwdYE8Yz/I/k1RgdUaLfsf7C+j+mq3RICq64uTCMaJPD0d/Odm0I5niKYNDIXJ6VnW8DXNH2NibMejXGxHnpYGgYvz6OQgv27zEhmoenrgQu9YoWJhabEToImN1WuJcRgb+yF/g1NFJE9NhSCznjqVc4wvqAYGoKxPkT+s0Y3hWgZZJE5W8pQUCLIY6BheElD197PLIeYqIjAvUxON2iKyJR9Et2asAow466GRtct3JUMws0JJVMtrFRG7B3B1ovo6CGqT2eUa4mfYx4HcYJMxJ7AId3GsFRE4VUTy+DgIkUntBM9qdaBSKPnIXZ4dJBxqRSSP3Q6hwYHsg7/qeVCNf6ORg7s4jgcUt+j49MA70PTo+3RjQYBviWSTBHRLehQ04S65HU63WtNyQMKctcVx53TEI4hClsV9VCb6S/NQPxoXtEI+zXAMjnXAiXL8uiJVRJHW57/dGDlvBY4sHNlWm6N5RkhF5MelctJx6sZMEHH+CzAAVrRTYN5MTa8AAAAASUVORK5CYII=";

jsPopupBox.overlay = document.createElement("div");
jsPopupBox.overlay.style.position = "fixed";
jsPopupBox.overlay.style.top = "0";
jsPopupBox.overlay.style.left = "0";
jsPopupBox.overlay.style.right = "0";
jsPopupBox.overlay.style.bottom = "0";
jsPopupBox.overlay.style.display = "flex";
jsPopupBox.overlay.style.justifyContent = "center";
jsPopupBox.overlay.style.alignItems = "center";
jsPopupBox.overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";

jsPopupBox.dialog = document.createElement("div");
jsPopupBox.dialog.style.backgroundColor = "white";
jsPopupBox.dialog.style.color = "black";
jsPopupBox.dialog.style.textAlign = "justify";
jsPopupBox.dialog.style.margin = "3%";
jsPopupBox.dialog.style.padding = "10px";
jsPopupBox.dialog.style.borderRadius = "8px";
jsPopupBox.dialog.style.maxHeight = "100vh";
jsPopupBox.dialog.style.overflowY = "auto";

/**
 * show
 * <br/>
 * Ex:<br/>
 * <code>
 * jsPopupBox.show("HTML formatted message!!!", "divId");
 * </code>
 * @param {String} html
 * @param {String} id - dialog component id (Optional) | undefined - default name "jsPopupBox"
 */
jsPopupBox.show = (html, id) => {
    let overlay = document.createElement("div");
    overlay.id = (id !== undefined && id !== null && id.length > 0) ? id + "Overlay" : "jsPopupBoxOverlay";
    overlay.style.position = jsPopupBox.overlay.style.position;
    overlay.style.top = jsPopupBox.overlay.style.top;
    overlay.style.left = jsPopupBox.overlay.style.left;
    overlay.style.right = jsPopupBox.overlay.style.right;
    overlay.style.bottom = jsPopupBox.overlay.style.bottom;
    overlay.style.display = jsPopupBox.overlay.style.display;
    overlay.style.justifyContent = jsPopupBox.overlay.style.justifyContent;
    overlay.style.alignItems = jsPopupBox.overlay.style.alignItems;
    overlay.style.backgroundColor = jsPopupBox.overlay.style.backgroundColor;

    let dialog = document.createElement("div");
    dialog.id = (id !== undefined && id !== null && id.length > 0) ? id : "jsPopupBox";
    dialog.style.backgroundColor = jsPopupBox.dialog.style.backgroundColor;
    dialog.style.color = jsPopupBox.dialog.style.color;
    dialog.style.textAlign = jsPopupBox.dialog.style.textAlign;
    dialog.style.margin = jsPopupBox.dialog.style.margin;
    dialog.style.padding = jsPopupBox.dialog.style.padding;
    dialog.style.borderRadius = jsPopupBox.dialog.style.borderRadius;
    dialog.style.maxHeight = jsPopupBox.dialog.style.maxHeight;
    dialog.style.overflowY = jsPopupBox.dialog.style.overflowY;
    dialog.innerHTML = html;

    overlay.appendChild(dialog);
    document.body.appendChild(overlay);
};

/**
 * close
 * <br/>
 * Ex:<br/>
 * <code>
 * jsPopupBox.close("divId");
 * </code>
 * @param {String} id - dialog component id (Optional) | undefined - default name "jsPopupBox"
 */
jsPopupBox.close = (id) => {
    let overlay = document.getElementById((id !== undefined && id !== null && id.length > 0) ? id + "Overlay" : "jsPopupBoxOverlay");
    overlay.style.display = "none";
    document.body.removeChild(overlay);
};

/**
 * alert
 * <br/>
 * Ex:<br/>
 * <code>
 * jsPopupBox.alert("HTML formatted message!!!", onCloseFunction);
 * </code>
 * @param {String} message - message
 * @param {function} onClose - function()
 */
jsPopupBox.alert = (message, onClose) => {
    let alertId = "alert" + new Date().getTime();
    let html = "";
    html += "<div>" + message + "</div>";
    html += "<button id='" + alertId + "Ok'><img src='" + jsPopupBox.imgOk + "'></button>";
    jsPopupBox.show(html, alertId);

    let alertOK = document.getElementById(alertId + "Ok");
    alertOK.onclick = () => {
        jsPopupBox.close(alertId);
        if (onClose !== undefined) {
            onClose();
        }
    };
};

/**
 * confirm
 * <br/>
 * Ex:<br/>
 * <code>
 * jsPopupBox.confirm("HTML formatted message!!!", onOkFunction, onCancelFunction);
 * </code>
 * @param {String} message - message
 * @param {function} onOk - function()
 * @param {function} onCancel - function()
 */
jsPopupBox.confirm = (message, onOk, onCancel) => {
    let confirmId = "confirm" + new Date().getTime();
    let html = "";
    html += "<div>" + message + "</div>";
    html += "<tablestyle='width:100%'><tr>";
    html += "<td align='right'><button id='" + confirmId + "Ok'><img src='" + jsPopupBox.imgOk + "'></button>&nbsp;&nbsp;&nbsp;";
    html += "<td align='left'>&nbsp;&nbsp;&nbsp;<button id='" + confirmId + "Cancel'><img src='" + jsPopupBox.imgCancel + "'></button>";
    html += "</table>";
    jsPopupBox.show(html, confirmId);

    let confirmOK = document.getElementById(confirmId + "Ok");
    confirmOK.onclick = () => {
        jsPopupBox.close(confirmId);
        if (onOk !== undefined) {
            onOk();
        }
    };
    let confirmCancel = document.getElementById(confirmId + "Cancel");
    confirmCancel.onclick = () => {
        jsPopupBox.close(confirmId);
        if (onCancel !== undefined) {
            onCancel();
        }
    };
};

/**
 * prompt
 * <br/>
 * Ex:<br/>
 * <code>
 * jsPopupBox.prompt("HTML formatted message!!!", onOkFunction, onCancelFunction);
 * </code>
 * @param {String} message
 * @param {function} onOk - function(text)
 * @param {function} onCancel - function()
 */
jsPopupBox.prompt = (message, onOk, onCancel) => {
    let promptId = "prompt" + new Date().getTime();
    let html = "";
    html += "<form id='" + promptId + "Form'>";
    html += "<div>";
    html += message + "<br/>";
    html += "<input id='" + promptId + "Input' type='text' required/>";
    html += "</div>";
    html += "<table style='width:100%'><tr>";
    html += "<td align='right'><button id='" + promptId + "Ok' type='submit'><img src='" + jsPopupBox.imgOk + "'></button>&nbsp;&nbsp;&nbsp;";
    html += "<td align='left'>&nbsp;&nbsp;&nbsp;<button id='" + promptId + "Cancel' type='button'><img src='" + jsPopupBox.imgCancel + "'></button>";
    html += "</table>";
    html += "</form>";
    jsPopupBox.show(html, promptId);

    let promptForm = document.getElementById(promptId + "Form");
    promptForm.onsubmit = (event) => {
        event.preventDefault();
        if (onOk !== undefined) {
            onOk(document.getElementById(promptId + "Input").value);
        }
        jsPopupBox.close(promptId);
    };
    let promptCancel = document.getElementById(promptId + "Cancel");
    promptCancel.onclick = () => {
        if (onCancel !== undefined) {
            onCancel();
        }
        jsPopupBox.close(promptId);
    };
};

/**
 * showUrlDialog
 * <br/>
 * Ex:<br/>
 * <code>
 * jsPopupBox.page("page.html", onLoadFunction, onErrorFunction);
 * </code>
 * @param {String} url - page url
 * @param {String} id - dialog id
 * @param {function} onLoad - function(page)
 * @param {function} onError - function(status)
 */
jsPopupBox.page = (url, id, onLoad, onError) => {
    if (url !== undefined && url !== null && id !== undefined && id !== null) {
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    jsPopupBox.show(xhr.responseText, id);
                    if (onLoad !== undefined && onLoad !== null) {
                        onLoad(xhr.responseText);
                    }
                } else {
                    if (onError !== undefined && onError !== null) {
                        onError(xhr.status);
                    } else {
                        jsPopupBox.show("ERROR LOADING: " + url + "<br/>STATUS: " + status);
                    }
                }
            }
        };
        xhr.open("GET", url, true);
        xhr.send();
    } else {
        jsPopupBox.show("ERROR LOADING: Page <b>id</b> is not defined");
    }
};


/**
 * showFormDialog
 * 
 * var fields = [];<br/>
 * fields.push({field: "name", label: "Name:", type: "text", htmlParams: "value='' required"});<br/>
 * fields.push({field: "number", label: "Number:", type: "number", htmlParams: "value=0.002 required"});<br/>
 * fields.push({field: "today", label: "Today:", type: "date", htmlParams: "value='2019-10-14' required"});<br/>
 * fields.push({field: "check", label: "Checkbox:", type: "checkbox", htmlParams: "checked"});<br/>
 * jsPopupBox.form(
 *    "<h1>Formulário</h1>",
 *    fields, 
 *    (t) => jsPopupBox.show(JSON.stringify(t))
 * ); 
 * 
 * @param {String} title - Title HTML String
 * @param {object} options - Array with field options [{field:<String>, type:<String>, htmlParams:<String>}, {...}]
 * @param {function} onOk - function(formDataObject)
 * @param {function} onCancel - function()
 */
jsPopupBox.form = (title, options, onOk, onCancel) => {
    let formId = "form" + new Date().getTime();
    let html = "" + title;
    html += "<form id='" + formId + "Form'>";
    html += "<div>";
    for (let i = 0; i < options.length; i++) {
        let opt = options[i];
        if (opt.type !== "option") {
            if (opt.type === "select") {
                html += opt.label !== undefined ? opt.label : "";
                html += "<select id='" + formId + "Input" + opt.field + "' " + (opt.htmlParams !== undefined ? opt.htmlParams : "") + ">";
                let optSel;
                do {
                    if (i + 1 < options.length) {
                        optSel = options[i + 1];
                        if (optSel.field === opt.field && optSel.type === "option") {
                            html += "<option " + (optSel.htmlParams !== undefined ? optSel.htmlParams : "") + ">" + optSel.label + "</option>";
                            i++;
                        } else {
                            optSel = null;
                        }
                    } else {
                        optSel = null;
                    }
                } while (optSel !== null);
                html += "</select>";
            } else if (opt.type === "textarea") {
                html += opt.label !== undefined ? opt.label : "";
                html += "<textarea id='" + formId + "Input" + opt.field + "' " + (opt.htmlParams !== undefined ? opt.htmlParams : "") + ">" + (opt.value !== undefined ? opt.value : "") + "</textarea>";
            } else if (opt.type === "html") {
                html += opt.label !== undefined ? opt.label : "";
                html += opt.htmlParams !== undefined ? opt.htmlParams : "";
            } else if (opt.type === "radio") {
                html += "<input name='" + formId + "Input" + opt.field + "' type='" + opt.type + "' " + (opt.htmlParams !== undefined ? opt.htmlParams : "") + " />";
                html += opt.label !== undefined ? opt.label : "";
            } else if (opt.type === "checkbox") {
                html += "<input id='" + formId + "Input" + opt.field + "' type='" + opt.type + "' " + (opt.htmlParams !== undefined ? opt.htmlParams : "") + " />";
                html += opt.label !== undefined ? opt.label : "";
            } else {
                html += opt.label !== undefined ? opt.label : "";
                html += "<input id='" + formId + "Input" + opt.field + "' type='" + opt.type + "' " + (opt.htmlParams !== undefined ? opt.htmlParams : "") + " />";
            }
        }
    }
    html += "</div>";
    html += "<br/>";
    html += "<table style='width:100%'><tr>";
    html += "<td align='right'><button id='" + formId + "OK' type='submit'><img src='" + jsPopupBox.imgOk + "'></button>&nbsp;&nbsp;&nbsp;";
    html += "<td align='left'>&nbsp;&nbsp;&nbsp;<button id='" + formId + "Cancel' type='button'><img src='" + jsPopupBox.imgCancel + "'></button>";
    html += "</table>";
    html += "</form>";
    jsPopupBox.show(html, formId);

    let formForm = document.getElementById(formId + "Form");
    formForm.onsubmit = (event) => {
        event.preventDefault();
        if (onOk !== undefined) {
            let json = "";
            json += "{";
            for (let i = 0; i < options.length; i++) {
                let opt = options[i];
                if (opt.type !== "html" && opt.type !== "option") {
                    if (opt.type === "number") {
                        json += "\"" + opt.field + "\":" + document.querySelector("#" + formId + "Input" + opt.field).value + ", ";
                    } else if (opt.type === "checkbox") {
                        json += "\"" + opt.field + "\":" + document.querySelector("#" + formId + "Input" + opt.field).checked + ", ";
                    } else if (opt.type === "radio") {
                        if (!json.includes(opt.field)) {
                            let value = document.querySelector("input[name='" + formId + "Input" + opt.field + "']:checked").value;
                            if (isNaN(value)) {
                                json += "\"" + opt.field + "\":\"" + value + "\", ";
                            } else {
                                json += "\"" + opt.field + "\":" + value + ", ";
                            }
                        }
                    } else {
                        json += "\"" + opt.field + "\":" + "\"" + document.querySelector("#" + formId + "Input" + opt.field).value.replace(/\n/g, "\\n").replace(/\"/g, "\\\"") + "\", ";
                    }
                }
            }
            json = json.substring(0, json.length - 2);
            json += "}";
            console.log(json);
            onOk(JSON.parse(json));
        }
        jsPopupBox.close(formId);
    };
    let formCancel = document.querySelector("#" + formId + "Cancel");
    formCancel.onclick = () => {
        if (onCancel !== undefined) {
            onCancel();
        }
        jsPopupBox.close(formId);
    };
};
