var getUserInfo = Class.create();
getUserInfo.prototype = Object.extendsObject(AbstractAjaxProcessor, {

    getInfo: function() {
        var gr = new GlideRecord("sys_user");
        gr.addQuery("sys_id", this.getParameter("sysparm_id"));
        gr.query();
        if (gr.next()) {
            var json = new JSON();
            var result = {
                "location": gr.getValue("location"),
                "manager": gr.getDisplayValue("manager"),
                "manager_ref": gr.getValue("manager"),
                "title": gr.getDisplayValue("title"),
                "department": gr.getDisplayValue("department"),
                "department_ref": gr.getValue("department"),
                "phone": gr.getDisplayValue("phone"),
                "mobile_phone": gr.getDisplayValue("mobile_phone"),
                "email": gr.getDisplayValue("email"),
                "user_name": gr.getDisplayValue("user_name"),
                "employee_number": gr.getDisplayValue("employee_number"),
                "tech_id": gr.getDisplayValue("u_tech_id"),
                "u_start_date": gr.getDisplayValue("u_start_date"),
                "u_usha_sales_id": gr.getDisplayValue("u_usha_sales_id"),
                "u_icoms_sales_id": gr.getDisplayValue("u_icoms_sales_id"),
                "company": gr.getDisplayValue("company"),
                "u_icoms_account": gr.getValue("u_icoms_account"),
                "u_meta_phone_number": gr.getValue("u_meta_phone_number"),
                "u_usha_account": gr.getValue("u_usha_account")
            };
            return json.encode(result);
        }
        return null;
    },

    checkIfMemberOfAssignedGroup: function() {
        var assignedGroup = this.getParameter("sysparm_user_group");
        return gs.getUser().isMemberOf(assignedGroup);
    },


    type: 'getUserInfo'
});