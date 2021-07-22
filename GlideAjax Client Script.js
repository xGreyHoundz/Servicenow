function onChange(control, oldValue, newValue, isLoading, isTemplate) {
    if (isLoading || newValue === '') {
        return;
    }



    var eval_user = g_form.getValue('evaluators_name');
    var ga = new GlideAjax('getUserInfoNERF');
    ga.addParam('sysparm_name', 'getinfo');
    ga.addParam('sysparm_id', newValue);
    ga.getXML(setField);

    function setField(response) {
        var answer = response.responseXML.documentElement.getAttribute("answer");
        if (answer) {

            var resultData = JSON.parse(answer);

            if (resultData.location_id != "") {
                g_form.setValue("loc_of_deployment", resultData.location_id);
                g_form.setReadOnly('loc_of_deployment', true);
            } else {
				g_form.setReadOnly('loc_of_deployment', false);
                g_form.setMandatory('loc_of_deployment', true);
            }

        }

    }
}