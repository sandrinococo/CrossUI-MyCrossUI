// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
xui.Class('App', 'xui.Module',{
    Instance:{
        // Dependency classes
        Dependencies:[],
        // Required modules
        Required:[],

        // To initialize properties
        properties : {},

        // To initialize instance(e.g. properties)
        initialize : function(){
        },

        // To initialize internal components (mostly UI controls)
        // *** If you're not a skilled, dont modify this function manually ***
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.FormLayout")
                .setHost(host,"xui_ui_formlayout1")
                .setLeft("16.761904761904763em")
                .setTop("12.19047619047619em")
                .setWidth("30.01904761904762em")
                .setHeight("24.99047619047619em")
                .setLayoutData({
                    "rows" : 5,
                    "cols" : 5,
                    "rowSetting" : {
                        "1" : {
                            "manualHeight" : 50
                        },
                        "2" : {
                            "manualHeight" : 50
                        },
                        "3" : {
                            "manualHeight" : 50
                        },
                        "4" : {
                            "manualHeight" : 50
                        },
                        "5" : {
                            "manualHeight" : 50
                        }
                    }
                })
            );
            
            host.xui_ui_formlayout1.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label7")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("5.866666666666666em")
                .setHeight("3.7333333333333334em")
                .setCaption("AAA"),
                "A2"
            );
            
            host.xui_ui_formlayout1.append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button4")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("5.942857142857143em")
                .setHeight("3.7333333333333334em")
                .setCaption("Button"),
                "C5"
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },

        // Give a chance to determine which UI controls will be appended to parent container
        customAppend : function(parent, subId, left, top){
            // "return false" will cause all the internal UI controls will be added to the parent panel
            return false;
        }
        /*,
        // To determine how properties affects this module
        propSetAction : function(prop){
        },
        // To set all node's style in this modlue
        customStyle:{}
    },
    //To customize the default properties and event handlers
    Static:{
        $DataModel:{
        },
        $EventHandlers:{
        }
    */
    }
});