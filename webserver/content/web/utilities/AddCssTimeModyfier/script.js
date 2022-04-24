/**
 * @file AddCssTimeModyfier utility for RPlayer web application
 * @copyright Robert Rajs 2022
 * @author Robert Rajs
 * @see {@link https://rajs.info|Home}
 * @see {@link https://zesilovac.cz|Zesilovač}
 * @see {@link https://bandzone.cz/rajs|Bandzone}
 * @see {@link https://technotramp.com|Technotramp}
 * @see {@link https://github.com/entlaabstudio/rplayer|GitHub}
 * @see {@link https://cs-cz.facebook.com/robert.rajs.9|Facebook}
 * @license
 * Copyright (c) 2022 Robert Rajs
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
class AddCssTimeModyfier {
    constructor() {
        var that = this;
        $(document).ready(
            function() {
                that.init();
            }
        );
    }

    init() {
        this.css = {
            entrance: {
                backgroundColor: "pink"
            },
            outgoing: {
                backgroundColor: "white"
            },
            possibleSelectors: [
                ".confSource",
                ".addCode",
                ".cssFx",
                ".cssSelector",
                ".offset",
                ".animationTimeEntrance",
                ".animationTimeOutgoing"
            ]
        }
        this.checkForm();
    }

    checkForm() {
        var that = this;
        $("#mainForm").on("keyup change paste",function() {
            that.errors = {};
            that.checkConfSource();
            that.checkFxInput();
            that.checkAnimationTimesInputs();
            that.checkCssSelectorInput();
            that.checkAddCode();
            that.printErrors();
            that.okState();
            that.inputMask();
            that.processAction();
        });
    }

    processAction() {
        var that = this;
        if (this.processActionInit === undefined) {
            that.processActionInit = true;
            
            function getRealTimeMs(time) {

                function recursion() {
                    var existsTime = 0;
                    for (const [key,value] of Object.entries(that.obj.cssTimeModyfier.commandsInTime)) {
                        if (parseInt(key) <= time) {
                            existsTime = parseInt(key);
                        }
                    }
                    if (existsTime == time) {
                        time += 1;
                        recursion(time);
                    }
                }

                recursion();
                return time;

            }

            $(document).on("click",".processBtn",function() {
                if (Object.keys(that.errors).length == 0) {
                    if ($(".offset").val() == "") {
                        $(".offset").val("0");
                    }
                    var offset = parseInt($(".offset").val());
                    var cssFx = $(".cssFx").val();
                    var jsonTimeMs;
                    for (const [key,value] of Object.entries(that.jsonObj)) {
                        jsonTimeMs = value.TimeMs + offset;

                        that.pushJsonRecord({
                            nodeKey: getRealTimeMs(jsonTimeMs),
                            cssKey: cssFx,
                            length: value.LengthMs,
                            animationTime: {
                                entrance: parseInt($(".animationTimeEntrance").val()),
                                outgoing: parseInt($(".animationTimeOutgoing").val()),
                            }
                        });
                    }

                    $(".confSource").val("\"cssTimeModyfier\": " + JSON.stringify(that.obj.cssTimeModyfier, null, 4));
                }
                return false;
            });
        }
    }

    pushJsonRecord(recordObj) {
        var recordObj;
        this.obj.cssTimeModyfier.commandsInTime[recordObj.nodeKey] = {
            selectorsKey: $(".cssSelector").val(),
            cssKey: recordObj.cssKey,
            length: recordObj.length,
            animationTime: {
                entrance: recordObj.animationTime.entrance,
                outgoing: recordObj.animationTime.outgoing,
            }
        };
        for (const [key, value] of Object.entries(this.obj.cssTimeModyfier.commandsInTime[recordObj.nodeKey])) {
            if (value == "default") {
                delete this.obj.cssTimeModyfier.commandsInTime[recordObj.nodeKey][key];
            }
        }
        if (this.obj.cssTimeModyfier.commandsInTime[recordObj.nodeKey].animationTime.entrance == 0) {
            delete this.obj.cssTimeModyfier.commandsInTime[recordObj.nodeKey].animationTime;
        }
    }

    inputMask() {
        $(".offset, .animationTimeEntrance, .animationTimeOutgoing").inputmask({"mask" : "99999999"}); //specifying options
        $(".offset, .animationTimeEntrance, .animationTimeOutgoing").inputmask({"placeholder" : ""});  //static mask
    }

    okState() {
        var that = this;
        if (this.okInfoTicker === undefined) {
            this.okInfoTicker = true;
            setInterval(function() {
                if (Object.keys(that.errors).length == 0) {
                    $(".errors").val("Great! Everything looks good.");
                    if ($(".processBtn").hasClass("disabled")) {
                        $(".processBtn").removeClass("disabled");
                    }
                } else {
                    if (!$(".processBtn").hasClass("disabled")) {
                        $(".processBtn").addClass("disabled");
                    }
                }
            },100);
        }
    }

    checkCssSelectorInput() {
        if ($(".cssSelector").val() == "") {
            this.pushError("cssSelectorInput", "CSS selector must be set.", ".cssSelector");
        } else {
            try {
                var selectorEntries = 0;
                for (const [key, value] of Object.entries(this.obj.cssTimeModyfier.selectors)) {
                    if (key == $(".cssSelector").val()) {
                        selectorEntries += 1;
                    }
                }
                if (selectorEntries < 1) {
                    this.pushError("cssSelectorInput", "Value from CSS selector input must be same as any key from cssTimeModyfier.selectors.", ".cssSelector");
                }   
            } catch (error) {
                
            }
        }
    }

    checkAddCode() {
        if ($(".addCode").val() == "") {
            this.pushError("addCode", "JSON for additing must be set.", ".addCode");
        } else {
            try {
                this.jsonObj = JSON.parse($(".addCode").val());
                if (Object.keys(this.jsonObj).length == 0) {
                    this.pushError("addCode", "JSON for additing must be set.", ".addCode");
                } else {
                    for (const [key, value] of Object.entries(this.jsonObj)) {
                        var timeMsExists = false;
                        var lengthMsExists = false;
                        for (const [key2, value2] of Object.entries(value)) {
                            if (key2 == "TimeMs") {
                                timeMsExists = true;
                            }
                            if (key2 == "LengthMs") {
                                lengthMsExists = true;
                            }
                            if (typeof(value2) != "number") {
                                if (key2 == "LengthMs" || key2 == "TimeMs") {
                                    this.pushError("addCode", "[Node " + key + "][\"" + key2 + "\"] must be a number.", ".addCode");
                                }
                            }
                        }
                        if (!timeMsExists) {
                            this.pushError("addCode", "[Node " + key + "] Key \"TimeMs\" is missing.", ".addCode");
                        }
                        if (!lengthMsExists) {
                            this.pushError("addCode", "[Node " + key + "] Key \"LengthMs\" is missing.", ".addCode");
                        }
                    }
                }
            } catch (error) {
                this.pushError("addCode", "Syntax error.", ".addCode");
            }
        }
    }

    checkFxInput() {
        if ($(".cssFx").val() != "default") {
            if ($(".cssFx").val() == "") {
                this.pushError("cssFxInput", "CSS key must be set.", ".cssFx");
            } else {
                try {
                    var fxEntries = 0;
                    for (const [key, value] of Object.entries(this.obj.cssTimeModyfier.css)) {
                        if (key == $(".cssFx").val()) {
                            fxEntries += 1;
                        }
                    }
                    if (fxEntries < 1) {
                        this.pushError("cssFxInput", "Value from CSS key input must be same as any key from cssTimeModyfier.css.", ".cssFx");
                    }   
                } catch (error) {
                    
                }
            }
        }
    }

    checkAnimationTimesInputs() {
        if (
            $(".animationTimeEntrance").val() == "0"
        ) {
            $(".animationTimeOutgoing").val("0");
        }
        if ($(".animationTimeEntrance").val() == "") {
            this.pushError("animationTimeEntranceInput", "Animation entrance time must be set.", ".animationTimeEntrance");
        }
        if ($(".animationTimeOutgoing").val() == "") {
            this.pushError("animationTimeOutgoingInput", "Animation outgoing time must be set.", ".animationTimeOutgoing");
        }
    }

    checkConfSource() {
        var obj;
        try {
            
            eval("obj = {" + $(".leftSide .confSource").val() + "}");
            this.obj = obj;
            
            if (Object.keys(this.obj).length < 1) {
                this.pushError("confSource", "Nothing here.", ".confSource");
            }

            if (this.obj.cssTimeModyfier === undefined) {
                this.pushError("confSource", "Node cssTimeModyfier not found.", ".confSource");
            } else {
                
                if (this.obj.cssTimeModyfier.selectors === undefined) {
                    this.pushError("confSource", "Node cssTimeModyfier.selectors not found.", ".confSource");
                } else {
                    if (Object.keys(this.obj.cssTimeModyfier.selectors).length < 1) {
                        this.pushError("confSource", "Node cssTimeModyfier.selectors can not be empty.", ".confSource");
                    } else {
                        if (typeof(this.obj.cssTimeModyfier.selectors) != "object") {
                            this.pushError("confSource", "Node cssTimeModyfier.selectors must be object.", ".confSource");
                        }
                    }
                }

                if (this.obj.cssTimeModyfier.css === undefined) {
                    this.pushError("confSource", "Node cssTimeModyfier.css not found.", ".confSource");
                } else {
                    if (Object.keys(this.obj.cssTimeModyfier.css) < 1) {
                        this.pushError("confSource", "Node cssTimeModyfier.css can not be empty.", ".confSource");
                    } else {
                        if (typeof(this.obj.cssTimeModyfier.css) != "object") {
                            this.pushError("confSource", "Node cssTimeModyfier.css must be object.", ".confSource");
                        } else {
                            for (const [key, value] of Object.entries(this.obj.cssTimeModyfier.css)) {
                                if (value.entrance === undefined) {
                                    this.pushError("confSource", "The cssTimeModyfier.css[\"" + key + "\"] node must contain \"entrance\" object.", ".confSource");
                                } else {
                                    if (Object.keys(value.entrance) < 1) {
                                        this.pushError("confSource", "The cssTimeModyfier.css[\"" + key + "\"].entrance node must be set.", ".confSource");
                                    } else {
                                        if (typeof(value.entrance) != "object") {
                                            this.pushError("confSource", "The cssTimeModyfier.css[\"" + key + "\"].entrance node must be object.", ".confSource");
                                        }
                                    }
                                }
                                if (value.outgoing === undefined) {
                                    this.pushError("confSource", "The cssTimeModyfier.css[\"" + key + "\"] node must contain \"outgoing\" object.", ".confSource");
                                } else {
                                    if (Object.keys(value.outgoing) < 1) {
                                        this.pushError("confSource", "The cssTimeModyfier.css[\"" + key + "\"].outgoing node must be set.", ".confSource");
                                    } else {
                                        if (typeof(value.outgoing) != "object") {
                                            this.pushError("confSource", "The cssTimeModyfier.css[\"" + key + "\"].outgoing node must be object.", ".confSource");
                                        }
                                    }
                                }
                            }
                        }
                    }
                }

                if (this.obj.cssTimeModyfier.default === undefined) {
                    this.pushError("confSource", "Node cssTimeModyfier.default not found.", ".confSource");
                } else {
                    if (this.obj.cssTimeModyfier.default.cssKey === undefined) {
                        this.pushError("confSource", "Node cssTimeModyfier.default.cssKey must be set.", ".confSource");
                    } else {
                        try {
                            var cssEntries = 0;
                            for (const [key2, value2] of Object.entries(this.obj.cssTimeModyfier.css)) {
                                if (key2 == this.obj.cssTimeModyfier.default.cssKey) {
                                    cssEntries += 1;
                                }
                            }
                            if (cssEntries < 1) {
                                this.pushError("confSource", "Value from cssTimeModyfier.default.cssKey must be same as any key from cssTimeModyfier.css.", ".confSource");
                            }   
                        } catch (error) {
                            
                        }
                    }
                    if (this.obj.cssTimeModyfier.default.length === undefined) {
                        this.pushError("confSource", "Node cssTimeModyfier.default.length must be set.", ".confSource");
                    } else {
                        if (typeof(this.obj.cssTimeModyfier.default.length) != "number") {
                            this.pushError("confSource", "Node cssTimeModyfier.default.length must be number.", ".confSource");
                        }
                    }
                    if (this.obj.cssTimeModyfier.default.animationTime === undefined) {
                        this.pushError("confSource", "Node cssTimeModyfier.default.animationTime must be set.", ".confSource");
                    } else {
                        if (this.obj.cssTimeModyfier.default.animationTime.entrance === undefined) {
                            this.pushError("confSource", "Node cssTimeModyfier.default.animationTime.entrance must be set.", ".confSource");
                        } else {
                            if (typeof(this.obj.cssTimeModyfier.default.animationTime.entrance) != "number") {
                                this.pushError("confSource", "Node cssTimeModyfier.default.animationTime.entrance must be number.", ".confSource");
                            }
                        }
                        if (this.obj.cssTimeModyfier.default.animationTime.outgoing === undefined) {
                            this.pushError("confSource", "Node cssTimeModyfier.default.animationTime.outgoing must be set.", ".confSource");
                        } else {
                            if (typeof(this.obj.cssTimeModyfier.default.animationTime.outgoing) != "number") {
                                this.pushError("confSource", "Node cssTimeModyfier.default.animationTime.outgoing must be number.", ".confSource");
                            }
                        }
                    }
                }

                if (this.obj.cssTimeModyfier.commandsInTime === undefined) {
                    this.pushError("confSource", "Node cssTimeModyfier.commandsInTime not found.", ".confSource");
                } else {
                    if (typeof(this.obj.cssTimeModyfier.commandsInTime) != "object") {
                        this.pushError("confSource", "Node cssTimeModyfier.commandsInTime must be object.", ".confSource");
                    } else {
                        for (const [key, value] of Object.entries(this.obj.cssTimeModyfier.commandsInTime)) {
                            if (value.selectorsKey === undefined) {
                                this.pushError("confSource", "Node cssTimeModyfier.commandsInTime[\"" + key + "\"].selectorsKey not found.", ".confSource");
                            } else {
                                if (value.selectorsKey == "") {
                                    this.pushError("confSource", "Node cssTimeModyfier.commandsInTime[\"" + key + "\"].selectorsKey can not be empty.", ".confSource");
                                } else {
                                    try {
                                        var fxEntries = 0;
                                        for (const [key2, value2] of Object.entries(this.obj.cssTimeModyfier.selectors)) {
                                            if (key2 == value.selectorsKey) {
                                                fxEntries += 1;
                                            }
                                        }
                                        if (fxEntries < 1) {
                                            this.pushError("confSource", "Value from cssTimeModyfier.commandsInTime[" + key + "].selectorsKey is not valid.", ".confSource");
                                        }   
                                    } catch (error) {
                                        
                                    }
                                }
                            }
                        }
                    }
                }
                
            }


        } catch (error) {
            this.pushError("confSource", "Syntax error.", ".confSource");
        }
    }

    pushError(where, message, cssSelector) {
        var where, message, cssSelector;
        if (this.errors[where] === undefined) {
            this.errors[where] = [];
        }
        this.errors[where][Object.keys(this.errors[where]).length] = {
            cssSelector: cssSelector,
            message: message
        };
    }

    printErrors() {
        var that = this;
        if (this.printing === undefined) {
            that.printing = true;
            setInterval(function() {
                var allErrors = "";
                var lat2 = false;
                var errSelectors = [];
                var lastInput = false;
                for (const [key, value] of Object.entries(that.errors)) {
                    if (lat2) {
                        allErrors += "\n-----\n";
                    }
                    var lat = false;
                    for (const [key2, value2] of Object.entries(value)) {
                        allErrors += ((lat) ? "\n" : "");
                        if (lastInput != key) {
                            allErrors += "[" + key + "]\n";
                        }
                        allErrors += "  ERROR: ";
                        allErrors += value2.message;
                        lastInput = key;
                        $(value2.cssSelector).css(that.css.entrance);
                        if (!errSelectors.includes(value2.cssSelector)) {
                            errSelectors[Object.keys(errSelectors).length] = value2.cssSelector;
                        }
                        lat = true;
                    }
                    lat2 = true;
                }
                for (const [key, value] of Object.entries(that.css.possibleSelectors)) {
                    if (!errSelectors.includes(value)) {
                        $(value).css(that.css.outgoing);
                    }
                }
                $(".errors").val(allErrors);
            },100);
        }
    }
}

new AddCssTimeModyfier();
