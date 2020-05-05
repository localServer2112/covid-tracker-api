const mongoose = require('mongoose');
const TestSchema = new mongoose.Schema({
            userID : String,
            test_date : {type : Date, default: Date.now}, 
            cvd : [
                { 
                    // cvd test variables
                    result : String,
                    cvd_test: Boolean,
                    cvd_status: Boolean,
                    cvd_condition: String,
                    cvd_q_short_breath: Boolean,
                    cvd_q_fever: Boolean,
                    cvd_q_cough: Boolean,
                    cvd_q_chest_pain: Boolean,
                    cvd_q_sore_throat: Boolean,
                    cvd_q_difficult_breath: Boolean,
                    cvd_q_contact_case: Boolean,
                    cvd_q_runny_nose: Boolean,
                    cvd_q_ear_pain: Boolean,
                    cvd_q_diarrhea: Boolean,
                    cvd_q_headache: Boolean,
                    cvd_q_malaise: Boolean,
                    cvd_q_loss_of_smell: Boolean,
                    cvd_q_loss_of_taste: Boolean,
                    cvd_others: String,
                }
            ],
            rsl : [
                {
                    // rsl test variables
                    q1_lung: Boolean,
                    q2_smoke: Boolean,
                    q3_kidney: Boolean,
                    q4_health: Boolean,
                    q5_heart: Boolean,
                    q6_diabetes: Boolean,
                    q7_cancer_now: Boolean,
                    q8_cancer_past: Boolean,
                    q9_immunosuppressive: Boolean,
                    q10_aspirin: Boolean,
                    q11_health_issues: {
                        answer: Boolean,
                        description: String,
                    },
                    result : String,
                }
            ]
});

module.exports = mongoose.model("Test",TestSchema);