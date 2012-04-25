goog.provide('Common');

goog.require('goog.dom');
goog.require('goog.soy');

goog.require('templates.formEditor');

var g_form_fields;

/**
 * @constructor
 */
Common = function() {
    g_form_fields = [];
    this.current_sum_field = '';
    this.blocks_count = 0;
    this.readOnlyFields = [];
}

/**
 * @example
 * [mrinft]: "Typ des akuten Infarktes MRT-Messung"
 * 1 "Lakune/SSI" 
 * 2 "Territorialinfarkt"
 * 3 "Grenzzone"
 * @param {string} text
 * @return {string}
 * @author Darin
 */
Common.prototype.readCombosDefinitions = function(text) {    
    // text = text.replace(/(?:\n)(\[\w+\]:\n\n(\s*\d+\s+("[(.+?)]+"|(.+?))\n)+)/gm, function(wholeMatch, m1, m2) {
    text = text.replace(/\n(\[[\w-]+\]:([ ]"([^"]+)"[ ]*)?\s*\n{1,2}([ ]+(\d+)?[ ]*("[^\"(.+?)]+"|(.+?))\n)+)/gm, function(wholeMatch, m1, m2, m3, m4) {
        var values = wholeMatch.split("\n"), index, options = [], i, start_index;

        // delete [ ]:
        values[1].replace(/\[(\w+)\]:/g, function(wholeMatch, m1) {
            index = m1;
            return m1;
        });

        start_index = (values[2] === '') ? 3 : 2;

        for (i = start_index; i < values.length; i++) {
            if (values[i] !== "") {
                values[i].replace(/[ ]+(\d+)?[ ]*("[\S ]*"[ ]*|[\S ]*)/g, function(wholeMatch, m1, m2) {
                    options.push({
                        key: m2.replace(/"/g, ""), // delete " if any
                        value: m1
                    });
                });
            }
        }

        g_form_fields[index] = {
            type: 'select',
            name: index,
            size: 1,
            title: m3 || '',
            options: options
        };

        return "\n\n";
    });

    return text;
}

/**
 * @example
 * [AnzahlMessungen]: 0-100000
 * @param {string} text
 * @return {string}
 * @author Darin
 */
Common.prototype.readNumberInputFields = function(text) {
    text = text.replace(/\[(\w+)\]:\s(\d+)-(\d+)\s*\n/gm, function(wholeMatch, m1, m2, m3) {
        g_form_fields[m1] = {
            type: "number",
            name: m1,
            min: m2,
            max: m3,
            value: m2
        };

        return "\n";
    });

    return text;
}

/**
 * @example
 * [Geburtsdatum]: Datum
 * @param {string} text
 * @return {string}
 * @author Darin
 */
Common.prototype.readDateInputFields = function(text) {
    var that = this;
    text = text.replace(/(?:\n)\[(\w+)\]:\sDatum\s*\n\n/gm, function(wholeMatch, m1) {
        g_form_fields[m1] = {
            type: "date",
            name: m1
        };

        return "\n";
    });

    return text;
}

/**
 * @example
 * [mrsaspa1d]: [Score] "Aspects-Score: betroffene Areale Tag1 MRT-Messung"
 * @param {string} text
 * @return {string}
 * @author Darin
 */
Common.prototype.readDefinitions = function(text) {
    text = text.replace(/\[(\w+)\]:[ ]*(\[(\w+)\])?([ ]*"([^"]+)")?\s*\n/gm, function(wholeMatch, m1, m2, m3, m4, m5) {
        if (g_form_fields[m3]) {
            // g_form_fields[m1] = g_form_fields[m3];
            g_form_fields[m1] = JSON.parse(JSON.stringify(g_form_fields[m3]));
            if(m2)
                g_form_fields[m1].name = m1;
            
            g_form_fields[m1].title = m5 || '';
        } else {
            g_form_fields[m1] = {
                name: m1,
                title: m5
            }
        }

        return "\n"; // wholeMatch;
    });

    return text;
}

/**
 * @param {string} id
 * @param {string} sum_field
 * @author Darin
 */
Common.prototype.generateHtmlElements = function(id, sum_field) {
    var i, onkeyup, current_field, block_style,
        el = g_form_fields[id],
        html_tag = '<label for="' + el.name + '">' + el.label + '</label>';
        el.style = 'style = "margin-left: 5px;width: 175px;"';
    switch (el.type) {
        case 'select' :
            if (el.inline) {
                html_tag = '';
            }
            html_tag += templates.formEditor.select(el);
            html_tag += el.inline?'':'</p>';
            break;
        case 'number' :
            if (el.inline) {
                html_tag = '';
            }
            html_tag += '<input type="number" name="' + el.name + '" id="' + el.name + '" min="' + el.min + '" max="' + el.max + '"  pattern="[0-9]{3}" title="' + el.title + '" size="30" ' + el.style + '/>';
            html_tag += el.inline?'':'</p>';
            html_tag += '\n';
            break;
        case 'text' :
            if (el.inline) {
                html_tag = '';
            }
            
            onkeyup = sum_field || '';
            //onkeyup = sum_field ? ' onkeyup="Common.sum(\'' + this.current_sum_field + '\');"' : '';
            html_tag += '<input type="text" name="' + el.name + '" id="' + el.name + '" title="' + el.title + '" size="30" maxlength="30"' + onkeyup + ' ' + el.style + '/>';
            html_tag += el.inline?'':'</p>';
            html_tag += '\n';
            break;
        case 'summary' :
            html_tag = templates.formEditor.summary(el);
            break;
        case 'textarea' :
            html_tag = templates.formEditor.textarea(el);
            break;
        case 'block' :
            block_style = ' style="display:' + ((el.hidden === true) ? 'none' : 'block') + '" ';

            html_tag = '\n<div id="' + el.id + '"' + block_style + '>';
           
            html_tag += (el.title) ? '\n' + el.title + '\n' : '';

            if (el.layout === "Horizontal") {
                for (i in el.items) {
                    if (el.items.hasOwnProperty(i)){
                        current_field = el.items[i];
                        onkeyup = this.setOnkeyupProperty(current_field);
                        html_tag += '<div class="hfloat">' + current_field.label + '<br/>';
                        if(current_field.type === 'select') {
                            current_field.style = el.style;
                            html_tag += templates.formEditor.select(current_field);
                        } else {
                            html_tag += '<input type="' + current_field.type + '" name="' + current_field.name + '" ' + onkeyup + ' id="' + current_field.name + '"  />';
                        }
                        html_tag += '</div>\n';
                    }
                }
                html_tag += '<div style="clear:both"></div></div>\n';
            } else {
                for (i in el.items) {
                    if (el.items.hasOwnProperty(i)){
                        current_field = el.items[i];
                        onkeyup = this.setOnkeyupProperty(current_field);
                        html_tag += this.generateHtmlElements(current_field.name, onkeyup);
                    }
                }
                html_tag += '</div>\n';
            }
            break;
        case 'date' :
            html_tag += '<input type="date" name="' + el.name + '" id="' + el.name + '" min="' + el.min + '" max="' + el.max + '" title="' + el.title + '" size="30" ' + el.style + ' /></p>\n';
            break;
        default :
            console.error("unknown el.type");
    }
 
    return html_tag;
}

/**
 * @private
 * @param {string} current_field
 * @return {string}
 * @author Darin
 */
Common.prototype.setOnkeyupProperty = function(current_field) {
    var i, j, onkeyup = "";
    for (i in g_form_fields) {
        if (g_form_fields.hasOwnProperty(i) && g_form_fields[i].type === "summary") {
            for (j in g_form_fields[i].fields) {
                if (g_form_fields[i].fields.hasOwnProperty(j) && g_form_fields[i].fields[j] === current_field.name) {
                    onkeyup = 'onkeyup="Common.sum(\'' + i + '\');"';
                }
            }
        }
    }

    return onkeyup;
}

/**
 * @example
 * @param {string} text
 * @return {string}
 * @author Darin
 */
Common.prototype.readInlineTextInputFields = function(text) {

    var that = this;
    text = text.replace(/(\*?\s?\[((?:\[[^\]]*\]|[^\[\]])*)\](?:\n[ ]*)?\[(.*?)\])/gm, function(wholeMatch, m1, m2, m3) {

        if (g_form_fields[m3]) {
            g_form_fields[m3].label = m2;
            g_form_fields[m3].inline = true;
        } else {
            g_form_fields[m3] = {
                type: 'text',
                name: m3,
                label: m2,
                title: m2,
                inline: true
            };
        }
        return that.generateHtmlElements(m3);
    });

    return text;
}

/**
 * @example
 * @param {string} text
 * @return {string}
 * @author Darin
 */
Common.prototype.readTextInputFields = function(text) {
    var that = this;
    text = text.replace(/\n[\s]*(\*?\s?\[((?:\[[^\]]*\]|[^\[\]])*)\](?:\n[ ]*)?\[(.*?)\])/gm, function(wholeMatch, m1, m2, m3) {
        if (g_form_fields[m3]) {
            g_form_fields[m3].label = m2;
        } else {
            g_form_fields[m3] = {
                type: 'text',
                name: m3,
                label: m2,
                title: ''
            };
        }
        return that.generateHtmlElements(m3);
    });

    return text;
}

 /**
 * @example
 * [Frontal][mrfwfl]
 * [Parieto-Occipital][mrfwpl]
 * [Temporal][mrfwtl]
 * [Basal ganglia][mrfwbl]
 * [Infratentorial][mrfwil]
 * 
 * Summe: [sum()][mrfwsl]
 * @param {string} text
 * @return {string}
 * @author Darin
 */
Common.prototype.readSummaryFields = function(text) {
    var that = this;
    text = text.replace(/\n(\*?\s?\[[\w -]*\]\[\w+\][ ]*\n)+\n[\w\s\+\(\):# ]+[ ]*\[sum\((.*)\)\]\[(\w+)\]/gm, function(wholeMatch, m1, m2, m3) {
        var i, sum_field_key, sum_fields, definedParams, field;
        sum_field_key = m3;

        g_form_fields[sum_field_key] = {
            fields: [],
            type: 'summary',
            name: sum_field_key
        };

        m2 = m2.replace(" ", "");
        definedParams = m2.split(",");
        
        sum_fields = wholeMatch.match(/[^)]\]\[(\w+)\]/gm);
        
        for (i in sum_fields) {
            if(sum_fields.hasOwnProperty(i)){

                field = sum_fields[i].substring(3, sum_fields[i].length - 1);

                if (m2.length === 0 || definedParams.indexOf(field) !== -1){
                    g_form_fields[sum_field_key].fields.push(field);
                }
            }
        }
        
        that.current_sum_field = sum_field_key;
        that.readOnlyFields.push(sum_field_key);
        // wholeMatch = that.readTextInputFields(wholeMatch);
        // wholeMatch = that.readFieldsBlocks(wholeMatch);
        that.current_sum_field = "";
        return wholeMatch;
    });

    return text;
}

/**
 * @param {string} text
 * @return {string}
 * @author Darin
 */
Common.prototype.readFieldsBlocks = function(text) {
    var sum_field = this.current_sum_field, that = this;

    // text = text.replace(/(\n([\w\s]+)\n[-]+)?\n\s*(\n\([\w\s=]+\))?(\n\{(Horizontal|Vertikal)\}\n)?\s*\n(\s*\*?\s*\[[\w\s\.\?\(˜)-]+\]\[[\w]+\]\n){2,}\s*\n/gm, function(wholeMatch, m1, m2, m3, m4, m5) {
    text = text.replace(/([^\n]+\n[-]+)?\n\s*(\n\([\w\s\"=]+\))?(\n\{(Horizontal|Vertikal)\}\n)?\s*\n(\n?[ ]*\*?[ ]*\[[\u00c4\u00d6\u00dc\u00e4\u00f6\u00fc\u00df\w\s\.\?\(˜)-]+\]\[[\w]+\][ ]*){2,}/gm, function(wholeMatch, m1, m2, m3, m4) {
        // m3 => (mrdif = Ja)
        var block_id, block;
        block_id = "block" + that.blocks_count;
        that.blocks_count += 1;
        block = {
            id: block_id,
            type: 'block',
            title: m1, // ? m2.replace("\n", "") : '',
            layout: m4,
            items: []
        };

        if (m2) {
            m2 = m2.replace(/\(([\w]*)\s=\s([\w]*|\"[\w]*\")\)/gm, function(wholeMatch, m1, m2) {
                block.hidden = true;
                block.dependsOn = {
                    field: m1,
                    value: m2.replace(/\"/g, '')
                };
                return wholeMatch;
            });
        }

        wholeMatch = wholeMatch.replace(/(\[((?:\[[^\]]*\]|[^\[\]])*)\][ ]?(?:\n[ ]*)?\[(.*?)\][ ]*)/gm, function(wholeMatch, m1, m2, m3) {

            if (g_form_fields[m3]) {
                // clone the object
                var obj = JSON.parse(JSON.stringify(g_form_fields[m3]));
                obj.label = m2;
                obj.name = m3;
                g_form_fields[m3] = obj;
            } else {
                g_form_fields[m3] = {
                    type: 'text',
                    name: m3,
                    label: m2,
                    title: ''
                };
            }

            block.items.push(g_form_fields[m3]);

            return wholeMatch;
        });

        g_form_fields[block_id] = block;

        return that.generateHtmlElements(block_id, sum_field, text);
    });

    return text;
}

/**
 * @example
 * /n/n[Kommentar][mrfcom]/n/n
 * @param {string} text
 * @return {string}
 * @author Darin
 */
Common.prototype.readTextAreas = function(text) {
    var that = this, i, values;
    text = text.replace(/\n\n([ ]*\*?[ ]*\[[\u00c4\u00d6\u00dc\u00e4\u00f6\u00fc\u00df\w\s\.\,\?\(\)-]+\]\[[\w]+\][ ]*\n\n)+/gm, function(wholeMatch) {

        values = wholeMatch.split("\n\n");

        for (i in values) {
            if(values.hasOwnProperty(i) && values[i] !== ''){
                values[i].replace(/\[([\u00c4\u00d6\u00dc\u00e4\u00f6\u00fc\u00df\w\s\.\,\?\(\)-]+)\]\[([\w]+)\]/g, function(wholeMatch, m1, m2){
                    if(!g_form_fields[m2]) {
                        g_form_fields[m2] = {
                            type: 'textarea',
                            name: m2,
                            label: m1,
                            title: ''
                        };
                    } else {
                        if (!g_form_fields[m2].type)
                            g_form_fields[m2].type = 'textarea';
                    }
                });
            }
        }

        return wholeMatch;
    });
    return text;
}

/**
 * 
 * @param {string} sum_field_key
 * @author Darin
 */
Common.sum = function(sum_field_key) {
    var i, sum = 0, fields = g_form_fields[sum_field_key].fields;
    for (i in fields){
        if(fields.hasOwnProperty(i)){
            sum += Number(document.getElementsByName(fields[i])[0].value);
        }
    }
    document.getElementsByName(sum_field_key)[0].value = sum;
}

/**
 * Show/hide blocks
 * 
 * @param {Object} select
 * @param {string} value
 * @param {string} block_key
 * @author Darin
 */
Common.toggleElement = function(select, value, block_key) {
    var block;
    block = document.getElementById(block_key);
    block.style.display = (select.value === value) ? 'block' : 'none';
}


/**
 * Add onchange event handler for select field, which can show or hide optional field blocks
 * 
 * @param {string} text
 * @return {string}
 * @author Darin
 */
Common.prototype.setDependencies = function(text) {
    var i, j, f, options, option_value;
    for (i in g_form_fields) {
        if (g_form_fields.hasOwnProperty(i)) {
            f = g_form_fields[i];
            if (f.type === 'block' && f.hidden === true) {
                if(g_form_fields[f.dependsOn.field].type === 'select') {
                    options = g_form_fields[f.dependsOn.field].options;            
                    for (j in options) {
                        if (options.hasOwnProperty(j) && options[j].key === f.dependsOn.value) {
                            option_value = options[j].value;
                        }
                    }
                    text = text.replace(new RegExp('name="' + f.dependsOn.field + '"', 'gm'), function(wholeMatch) {
                        return wholeMatch + ' onchange="Common.toggleElement(this, \'' + option_value + '\', \'' + f.id + '\') " ';
                    });
                } else {
                    text = text.replace(new RegExp('name="' + f.dependsOn.field + '"', 'gm'), function(wholeMatch) {
                        return wholeMatch + ' onkeyup="Common.toggleElement(this, \'' + f.dependsOn.value + '\', \'' + f.id + '\') " ';
                    });
                }
            }
        }
    }
    return text;
}

/**
 * @param {string} m String to convert
 * @return {string} Only the word charachter from the string
 * @author Darin
 */
Common.prototype.setHeaderId = function(m) {
    return m.replace(/[^\w]/g, '').toLowerCase();
}

/**
 * Setext-style headers
 * 
 * @param {string} text
 * @return {string}
 * @author Darin
 */
Common.prototype.doHeaders = function(text) {
    // Header 1
    // ========
    var that = this;
    text = text.replace(/^(.+)[ \t]*\n=+[ \t]*\n+/gm, function(wholeMatch, m1) {
        return '<h1 id="' + that.setHeaderId(m1) + '">' + m1 + "</h1>\n\n";
    });

    // Header 2
    // --------
    text = text.replace(/^(.+)[ \t]*\n-+[ \t]*\n+/gm, function(matchFound, m1) {
        return '<h2 id="' + that.setHeaderId(m1) + '">' + m1 + "</h2>\n\n";
    });

    // atx-style headers:
    //  # Header 1
    //  ## Header 2
    //  ## Header 2 with closing hashes ##
    //  ...
    //  ###### Header 6
    //
    text = text.replace(/^(\#{1,6})[ \t]*(.+?)[ \t]*\#*\n+/gm, function(wholeMatch,m1,m2) {
        var h_level = m1.length;
        return "<h" + h_level + ' id="' + that.setHeaderId(m2) + '">' + m2 + "</h" + h_level + ">\n\n";
    });

    return text;
}
/**
 * Remove all lines which begins with // 
 * 
 * @param {string} text
 * @return {string}
 */
Common.prototype.removeComments = function(text) {
    text = text.replace(/^\/\/[^\n]*/gm, '\n');
    return text;
}

/**
 *  html // 
 * 
 * @param {string} text
 * @return {string}
 */
Common.prototype.ignoreHtmlTags = function(text) {
    text = text.replace(/&/gm, '&amp;');
    text = text.replace(/</gm, '&lt;');
    text = text.replace(/>/gm, '&gt;');
    return text;
}

/**
 * Run all convert functions
 * 
 * @param {string} text
 * @return {string}
 * @author Darin
 */
Common.prototype.parseText = function(text) {

    text = this.removeComments(text);
    text = this.ignoreHtmlTags(text);

    // attacklab: Replace ~ with ~T
    // This lets us use tilde as an escape char to avoid md5 hashes
    // The choice of character is arbitray; anything that isn't
    // magic in Markdown will work.
    text = text.replace(/~/g, "~T");

    // attacklab: Replace $ with ~D
    // RegExp interprets $ as a special character
    // when it's in a replacement string
    text = text.replace(/\$/g, "~D");

    // Standardize line endings
    text = text.replace(/\r\n/g, "\n"); // DOS to Unix
    text = text.replace(/\r/g, "\n"); // Mac to Unix

    text = text.replace(/\n{3,}/g, "\n\n");

    // Make sure text begins and ends with a couple of newlines:
    text = "\n\n" + text + "\n\n";

    // Strip any lines consisting only of spaces and tabs.
    // This makes subsequent regexen easier to write, because we can
    // match consecutive blank lines with /\n+/ instead of something
    // contorted like /[ \t]*\n+/ .
    text = text.replace(/^[ \t]+$/mg, "");

    text = this.readNumberInputFields(text);
    text = this.readDateInputFields(text);
    text = this.readCombosDefinitions(text);
    text = this.readDefinitions(text);
    text = this.readTextAreas(text);
    text = this.readSummaryFields(text);
    text = this.readFieldsBlocks(text);
    text = this.doHeaders(text);
    text = this.readTextInputFields(text);
    text = this.readInlineTextInputFields(text);
    text = this.setDependencies(text);

    //text = text.replace(/\n/mg, "");

    return text;
}