import { Helper, SPTypes } from "gd-sprest-bs";
import Strings from "./strings";

/**
 * SharePoint Assets
 */
export const Configuration = Helper.SPConfig({
    ListCfg: [
        {
            ListInformation: {
                Title: "CRTO", //Strings.Lists.Main,
                BaseTemplate: SPTypes.ListTemplateType.GenericList
            },
            CustomFields: [
                {
                    name: "ItemType",
                    title: "Item Type",
                    type: Helper.SPCfgFieldType.Choice,
                    defaultValue: "Type 3",
                    required: true,
                    choices: [
                        "Type 1", "Type 2", "Type 3", "Type 4", "Type 5"
                    ]
                } as Helper.IFieldInfoChoice,
                {
                    name: "Status",
                    title: "Status",
                    type: Helper.SPCfgFieldType.Choice,
                    defaultValue: "Draft",
                    required: true,
                    showInNewForm: false,
                    choices: [
                        "Draft", "Submitted", "Rejected"
                    ]
                }
            ],
            ViewInformation: [
                {
                    ViewName: "All Items",
                    ViewFields: [
                        "Title,", "Description", "ItemType", "Status"
                    ]
                }
            ]
        }
    ]
});