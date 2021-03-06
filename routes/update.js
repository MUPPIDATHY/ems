const user = require("./user");

exports.edit_cand = function (req, res) {
  var message = "";

  var userId = req.session.userId;

  var post = req.body;
  // console.table("post", post);
  var cand_id = post.cand_id;

  // profile tab
  var name = post.full_name;
  console.log(post);
  var initial = post.initial;
  var initial_expansion = post.initial_expansion;
  var type_of_allotment = post.type_of_allotment;
  var father_name = post.father_name;
  var mother_name = post.mother_name;
  var date_of_birth = post.date_of_birth;
  var gender = post.gender;
  var blood_group = post.blood_group;
  var religion = post.religion;
  var community = post.community;
  var caste = post.caste;
  var nationality = post.nationality;
  var willing_to_donate_blood = post.willing_to_donate_blood;
  var academic_year = post.academic_year;
  var student_code = post.student_code;

  // admission tab
  var rank = post.rank;
  var rank_no = post.rank_no;
  var ar_no = post.ar_no;
  var total_mark = post.total_mark;
  var neet_mark = post.neet_mark;
  var reg_no = post.reg_no;
  var neet_roll_no = post.neet_roll_no;
  var course = post.course;
  var admission_type = post.admission_type;
  var admission_quota = post.admission_quota;
  var course_commencement = post.course_commencement;
  var date_of_admission = post.date_of_admission;
  var date_of_allotment = post.date_of_allotment;
  var selected_category = post.selected_category;
  var willing_for_counciling = post.willing_for_counciling;

  //address tab
  var ps_address = post.ps_address;
  var ps_pincode = post.ps_pincode;
  var ps_state = post.ps_state;
  var ps_district = post.ps_district;
  var pm_address = post.pm_address;
  var pm_pincode = post.pm_pincode;
  var pm_state = post.pm_state;
  var pm_district = post.pm_district;
  var address_type = "";
  ps_address == pm_address ? (address_type = "1") : (address_type = "0");

  //contact tab
  var tel_phone = post.tel_phone;
  var mobile_phone = post.mobile_phone;
  var email_id = post.email_id;
  var aadhar_no = post.aadhar_no;
  var voter_id = post.voter_id;
  var remarks = post.remarks;

  // for institute mbbs
  var institute_name = post.institute_name;
  var place = post.place;
  var register_no = post.register_no;
  var exam_passed = post.exam_passed;
  var relieving_date = post.relieving_date;
  var district = post.district;
  var board = post.board;
  var month_of_passing = post.month_of_passing;
  var state = post.state;
  var year_of_passing = post.year_of_passing;
  var duration = post.duration;

  //for mark details mbbs
  var lang_theory = post.lang_theory;
  var lang_practical = post.lang_practical;
  var lang_internal = post.lang_internal;
  var lang_total = post.lang_total;
  var lang_max = post.lang_max;
  var eng_theory = post.eng_theory;
  var eng_practical = post.eng_practical;
  var eng_internal = post.eng_internal;
  var eng_total = post.eng_total;
  var eng_max = post.eng_max;
  var mat_theory = post.mat_theory;
  var mat_practical = post.mat_practical;
  var mat_internal = post.mat_internal;
  var mat_total = post.mat_total;
  var mat_max = post.mat_max;
  var phy_theory = post.phy_theory;
  var phy_practical = post.phy_practical;
  var phy_internal = post.phy_internal;
  var phy_total = post.phy_total;
  var phy_max = post.phy_max;

  var chem_theory = post.chem_theory;
  var chem_practical = post.chem_practical;
  var chem_internal = post.chem_internal;
  var chem_total = post.chem_total;
  var chem_max = post.chem_max;
  var bio_theory = post.bio_theory;
  var bio_practical = post.bio_practical;
  var bio_internal = post.bio_internal;
  var bio_total = post.bio_total;
  var bio_max = post.bio_max;
  var bot_theory = post.bot_theory;
  var bot_practical = post.bot_practical;
  var bot_internal = post.bot_internal;
  var bot_total = post.bot_total;
  var bot_max = post.bot_max;

  var zoo_theory = post.zoo_theory;
  var zoo_practical = post.zoo_practical;
  var zoo_internal = post.zoo_internal;
  var zoo_total = post.zoo_total;
  var zoo_max = post.zoo_max;
  var lang_paper = post.lang_paper;

  var subj_code = post.subj_code;
  var total_mark_m = post.total_mark_m;
  var max_mark = post.max_mark;

  // for neet details mbbs
  var phy_neet_mark = post.phy_neet_mark;
  var chem_neet_mark = post.chem_neet_mark;
  var bio_neet_mark = post.bio_neet_mark;
  var agg_neet_mark = post.agg_neet_mark;
  var phy_neet_max = post.phy_neet_max;
  var chem_neet_max = post.chem_neet_max;
  var bio_neet_max = post.bio_neet_max;
  var agg_neet_max = post.agg_neet_max;

  //institute details mdms
  var institute_name = post.institute_name;
  var college_post = post.college_post;
  var amount_of_agreement = post.amount_of_agreement;
  var period_of_agreement = post.period_of_agreement;

  //academic details mdms
  var mbbs_name = post.mbbs_name;
  var mbbs_place = post.mbbs_place;
  var mbbs_district = post.mbbs_district;
  var mbbs_state = post.mbbs_state;
  var mbbs_university = post.mbbs_university;
  var mbbs_marksheet_no = post.mbbs_marksheet_no;
  var mbbs_passing_month = post.mbbs_passing_month;
  var mbbs_passing_year = post.mbbs_passing_year;
  var mbbs_speciality = post.mbbs_speciality;

  var pg_diplamo_name = post.pg_diplamo_name;
  var pg_diplamo_place = post.pg_diplamo_place;
  var pg_diplamo_district = post.pg_diplamo_district;
  var pg_diplamo_state = post.pg_diplamo_state;
  var pg_diplamo_university = post.pg_diplamo_university;
  var pg_diplamo_marksheet_no = post.pg_diplamo_marksheet_no;
  var pg_diplamo_passing_month = post.pg_diplamo_passing_month;
  var pg_diplamo_passing_year = post.pg_diplamo_passing_year;
  var pg_diplamo_speciality = post.pg_diplamo_speciality;

  var mdms_name = post.mdms_name;
  var mdms_place = post.mdms_place;
  var mdms_district = post.mdms_district;
  var mdms_state = post.mdms_state;
  var mdms_university = post.mdms_university;
  var mdms_marksheet_no = post.mdms_marksheet_no;
  var mdms_passing_month = post.mdms_passing_month;
  var mdms_passing_year = post.mdms_passing_year;
  var mdms_speciality = post.mdms_speciality;

  //neet_marks mdms
  var mbbs_marks = post.mbbs_marks;
  var pg_diplamo_marks = post.pg_diplamo_marks;
  var mdms_marks = post.mdms_marks;
  var neet_percentile = post.neet_percentile;

  //bank details
  var account_no = post.account_no;
  var bank_name = post.bank_name;
  var branch_name = post.branch_name;
  var ifsc = post.ifsc;
  var micr = post.micr;
  var pan_no = post.pan_no;

  //surety details
  var surety_one_name = post.surety_one_name;
  var surety_one_aadhaar = post.surety_one_aadhaar;
  var surety_one_pan = post.surety_one_pan;
  var surety_one_address = post.surety_one_address;

  var surety_two_name = post.surety_two_name;
  var surety_two_aadhaar = post.surety_two_aadhaar;
  var surety_two_pan = post.surety_two_pan;
  var surety_two_address = post.surety_two_address;

  var surety_three_name = post.surety_three_name;
  var surety_three_aadhaar = post.surety_three_aadhaar;
  var surety_three_pan = post.surety_three_pan;
  var surety_three_address = post.surety_three_address;

  //relieving details
  var relieved = post.relieved;
  var amount_refunded = post.amount_refunded;
  var date_of_relieving = post.date_of_relieving;
  var date_of_reallotment = post.date_of_reallotment;
  var college_name = post.college_name;
  var dt = new Date();
  registered_time = `${(dt.getMonth() + 1).toString().padStart(2, "0")}/${dt
    .getDate()
    .toString()
    .padStart(2, "0")}/${dt.getFullYear().toString().padStart(4, "0")} ${dt
    .getHours()
    .toString()
    .padStart(2, "0")}:${dt.getMinutes().toString().padStart(2, "0")}:${dt
    .getSeconds()
    .toString()
    .padStart(2, "0")}`;
  last_modified_time = `${(dt.getMonth() + 1).toString().padStart(2, "0")}/${dt
    .getDate()
    .toString()
    .padStart(2, "0")}/${dt.getFullYear().toString().padStart(4, "0")} ${dt
    .getHours()
    .toString()
    .padStart(2, "0")}:${dt.getMinutes().toString().padStart(2, "0")}:${dt
    .getSeconds()
    .toString()
    .padStart(2, "0")}`;

  var certificate = [];
  var certificates1 = [];
  var certificates2 = [];
  var certificates3 = [];
  var certificates4 = [];
  var certificates5 = [];
  var certificates6 = [];
  var certificates7 = [];
  var photosarr = [];
  var signarr = [];
  var thumbarr = [];
  var fingerarr = [];

  var certificate1 = post.c1;
  var c1_reg_no = post.c1_reg_no;
  var c1_date = post.c1_date;
  var c1_issue = post.c1_issue;
  var c1_place = post.c1_place;
  //var c1_file=c1_file;

  var certificate2 = post.c2;
  var c2_reg_no = post.c2_reg_no;
  var c2_date = post.c2_date;
  var c2_issue = post.c2_issue;
  var c2_place = post.c2_place;
  var c2_file = c2_file;

  var certificate3 = post.c3;
  var c3_reg_no = post.c3_reg_no;
  var c3_date = post.c3_date;
  var c3_issue = post.c3_issue;
  var c3_place = post.c3_place;
  var c3_file = c3_file;

  var certificate4 = post.c4;
  var c4_reg_no = post.c4_reg_no;
  var c4_date = post.c4_date;
  var c4_issue = post.c4_issue;
  var c4_place = post.c4_place;
  var c4_file = c4_file;

  var certificate5 = post.c5;
  var c5_reg_no = post.c5_reg_no;
  var c5_date = post.c5_date;
  var c5_issue = post.c5_issue;
  var c5_place = post.c5_place;
  var c5_file = c5_file;

  var certificate6 = post.c6;
  var c6_reg_no = post.c6_reg_no;
  var c6_date = post.c6_date;
  var c6_issue = post.c6_issue;
  var c6_place = post.c6_place;
  var c6_file = c6_file;

  var certificate7 = post.c7;
  var c7_reg_no = post.c7_reg_no;
  var c7_date = post.c7_date;
  var c7_issue = post.c7_issue;
  var c7_place = post.c7_place;
  var c7_file = c7_file;

  var certificate8 = post.c8;
  var c8_reg_no = post.c8_reg_no;
  var c8_date = post.c8_date;
  var c8_issue = post.c8_issue;
  var c8_place = post.c8_place;
  var c8_file = c8_file;

  var active_flag = "Y";

  var myObj = req.files;
  console.log("myobj:" + myObj);
  for (i in myObj) {
    if (myObj[i].fieldname.includes("n_cand_photo")) {
      var pcategory = "Photo";
      // if(myObj[i].fieldname.indexOf('n_cand_') !== -1){
      photosarr.push(myObj[i]);
    } else if (myObj[i].fieldname.includes("n_cand_sign")) {
      var scategory = "Sign";
      signarr.push(myObj[i]);
    } else if (myObj[i].fieldname.includes("n_cand_thumb")) {
      var tcategory = "Thumb";
      thumbarr.push(myObj[i]);
    }
    // else if(myObj[i].fieldname.includes('n_cand_finger'))
    // {

    //   fingerarr.push(myObj[i]);
    // }
    else if (myObj[i].fieldname.includes("n_community")) {
      certificate.push(myObj[i]);
    } else if (myObj[i].fieldname.includes("n_transfer")) {
      certificates1.push(myObj[i]);
    } else if (myObj[i].fieldname.includes("n_conduct")) {
      certificates2.push(myObj[i]);
    } else if (myObj[i].fieldname.includes("n_eligiblity")) {
      certificates3.push(myObj[i]);
    } else if (myObj[i].fieldname.includes("n_migration")) {
      certificates4.push(myObj[i]);
    } else if (myObj[i].fieldname.includes("n_admissioncertificate")) {
      certificates5.push(myObj[i]);
    } else if (myObj[i].fieldname.includes("n_admissioncommittee")) {
      certificates6.push(myObj[i]);
    } else if (myObj[i].fieldname.includes("n_others")) {
      certificates7.push(myObj[i]);
    } else {
      console.log("No file");
    }
    var x = "";
    x += myObj[i].filename + "<br>";
  }

  photosarr.forEach((element) => {
    db.query(
      `UPDATE ems.biometric_details SET active_flag = 'N',last_modified_time = '${last_modified_time}' WHERE (cand_id = '${cand_id}' AND category ='${pcategory}')`,
      function () {
        db.query(
          "INSERT INTO ems.biometric_details(cand_id,cand_name,category,Filename ,active_flag,last_modified_time) VALUES ('" +
            cand_id +
            "','" +
            name +
            "','" +
            pcategory +
            "','" +
            element.filename +
            "','" +
            active_flag +
            "','" +
            last_modified_time +
            "')"
        );
      }
    );
  });
  signarr.forEach((element) => {
    db.query(
      `UPDATE ems.biometric_details SET active_flag = 'N',last_modified_time = '${last_modified_time}' WHERE (cand_id = '${cand_id}' AND category ='${scategory}')`,
      function () {
        db.query(
          "INSERT INTO ems.biometric_details(cand_id,cand_name,category,Filename,active_flag,last_modified_time) VALUES ('" +
            cand_id +
            "','" +
            name +
            "','" +
            scategory +
            "','" +
            element.filename +
            "','" +
            active_flag +
            "','" +
            last_modified_time +
            "')"
        );
      }
    );
  });
  thumbarr.forEach((element) => {
    db.query(
      `UPDATE ems.biometric_details SET active_flag = 'N',last_modified_time = '${last_modified_time}' WHERE (cand_id = '${cand_id}' AND category ='${tcategory}')`,
      function () {
        db.query(
          "INSERT INTO ems.biometric_details(cand_id,cand_name,category,Filename,active_flag,last_modified_time) VALUES ('" +
            cand_id +
            "','" +
            name +
            "','" +
            tcategory +
            "','" +
            element.filename +
            "','" +
            active_flag +
            "','" +
            last_modified_time +
            "')"
        );
      }
    );
  });
  // fingerarr.forEach(element => {
  //   db.query("INSERT INTO ems.finger(cand_id,cand_name,cand_finger) VALUES ('"+ cand_id +"','"+ name +"','"+ element.filename+"')", function (err, data) {
  // });
  // });
  certificate.length != 0
    ? certificate.forEach((element) => {
        db.query(
          `UPDATE ems.certificate_details SET active_flag = 'N', last_modified_time ='${last_modified_time}' WHERE (cand_id = '${cand_id}' AND all_certificate = '${certificate1}')`,
          function () {
            db.query(
              "INSERT INTO ems.certificate_details(cand_id,cand_name,all_certificate,reg_no,date,issue,place,Filename,active_flag,last_modified_time) VALUES ('" +
                cand_id +
                "','" +
                name +
                "','" +
                certificate1 +
                "','" +
                c1_reg_no +
                "','" +
                c1_date +
                "','" +
                c1_issue +
                "','" +
                c1_place +
                "','" +
                element.filename +
                "','" +
                active_flag +
                "','" +
                last_modified_time +
                "')"
            );
          }
        );
      })
    : db.query(
        `UPDATE ems.certificate_details SET reg_no ='${c1_reg_no}',date='${c1_date}',issue='${c1_issue}',place='${c1_place}' WHERE (cand_id = '${cand_id}' AND all_certificate = '${certificate1}' AND active_flag ='${active_flag}')`
      );

  certificates1.length != 0
    ? certificates1.forEach((element) => {
        db.query(
          `UPDATE ems.certificate_details SET active_flag = 'N', last_modified_time ='${last_modified_time}'WHERE (cand_id = '${cand_id}' AND all_certificate = '${certificate2}')`,
          function () {
            db.query(
              "INSERT INTO ems.certificate_details(cand_id,cand_name,all_certificate,reg_no,date,issue,place,Filename,active_flag,last_modified_time) VALUES ('" +
                cand_id +
                "','" +
                name +
                "','" +
                certificate2 +
                "','" +
                c2_reg_no +
                "','" +
                c2_date +
                "','" +
                c2_issue +
                "','" +
                c2_place +
                "','" +
                element.filename +
                "','" +
                active_flag +
                "','" +
                last_modified_time +
                "')"
            );
          }
        );
      })
    : db.query(
        `UPDATE ems.certificate_details SET reg_no ='${c2_reg_no}',date='${c2_date}',issue='${c2_issue}',place='${c2_place}' WHERE (cand_id = '${cand_id}' AND all_certificate = '${certificate2}' AND active_flag ='${active_flag}')`
      );

  certificates2.length != 0
    ? certificates2.forEach((element) => {
        db.query(
          `UPDATE ems.certificate_details SET active_flag = 'N',last_modified_time ='${last_modified_time}' WHERE (cand_id = '${cand_id}' AND all_certificate = '${certificate3}')`,
          function () {
            db.query(
              "INSERT INTO ems.certificate_details(cand_id,cand_name,all_certificate,reg_no,date,issue,place,Filename,active_flag,last_modified_time) VALUES ('" +
                cand_id +
                "','" +
                name +
                "','" +
                certificate3 +
                "','" +
                c3_reg_no +
                "','" +
                c3_date +
                "','" +
                c3_issue +
                "','" +
                c3_place +
                "','" +
                element.filename +
                "','" +
                active_flag +
                "','" +
                last_modified_time +
                "')"
            );
          }
        );
      })
    : db.query(
        `UPDATE ems.certificate_details SET reg_no ='${c3_reg_no}',date='${c3_date}',issue='${c3_issue}',place='${c3_place}' WHERE (cand_id = '${cand_id}' AND all_certificate = '${certificate3}' AND active_flag ='${active_flag}')`
      );

  certificates3.length != 0
    ? certificates3.forEach((element) => {
        db.query(
          `UPDATE ems.certificate_details SET active_flag = 'N',last_modified_time ='${last_modified_time}' WHERE (cand_id = '${cand_id}' AND all_certificate = '${certificate4}')`,
          function () {
            db.query(
              "INSERT INTO ems.certificate_details(cand_id,cand_name,all_certificate,reg_no,date,issue,place,Filename,active_flag,last_modified_time) VALUES ('" +
                cand_id +
                "','" +
                name +
                "','" +
                certificate4 +
                "','" +
                c4_reg_no +
                "','" +
                c4_date +
                "','" +
                c4_issue +
                "','" +
                c4_place +
                "','" +
                element.filename +
                "','" +
                active_flag +
                "','" +
                last_modified_time +
                "')"
            );
          }
        );
      })
    : db.query(
        `UPDATE ems.certificate_details SET reg_no ='${c4_reg_no}',date='${c4_date}',issue='${c4_issue}',place='${c4_place}' WHERE (cand_id = '${cand_id}' AND all_certificate = '${certificate4}' AND active_flag ='${active_flag}')`
      );

  certificates4.length != 0
    ? certificates4.forEach((element) => {
        db.query(
          `UPDATE ems.certificate_details SET active_flag = 'N',last_modified_time ='${last_modified_time}' WHERE (cand_id = '${cand_id}' AND all_certificate = '${certificate5}')`,
          function () {
            db.query(
              "INSERT INTO ems.certificate_details(cand_id,cand_name,all_certificate,reg_no,date,issue,place,Filename,active_flag,last_modified_time ) VALUES ('" +
                cand_id +
                "','" +
                name +
                "','" +
                certificate5 +
                "','" +
                c5_reg_no +
                "','" +
                c5_date +
                "','" +
                c5_issue +
                "','" +
                c5_place +
                "','" +
                element.filename +
                "','" +
                active_flag +
                "','" +
                last_modified_time +
                "')"
            );
          }
        );
      })
    : db.query(
        `UPDATE ems.certificate_details SET reg_no ='${c5_reg_no}',date='${c5_date}',issue='${c5_issue}',place='${c5_place}' WHERE (cand_id = '${cand_id}' AND all_certificate = '${certificate5}' AND active_flag ='${active_flag}')`
      );

  certificates5.length != 0
    ? certificates5.forEach((element) => {
        db.query(
          `UPDATE ems.certificate_details SET active_flag = 'N',last_modified_time ='${last_modified_time}' WHERE (cand_id = '${cand_id}' AND all_certificate = '${certificate6}')`,
          function () {
            db.query(
              "INSERT INTO ems.certificate_details(cand_id,cand_name,all_certificate,reg_no,date,issue,place,Filename,active_flag,last_modified_time) VALUES ('" +
                cand_id +
                "','" +
                name +
                "','" +
                certificate6 +
                "','" +
                c6_reg_no +
                "','" +
                c6_date +
                "','" +
                c6_issue +
                "','" +
                c6_place +
                "','" +
                element.filename +
                "','" +
                active_flag +
                "','" +
                last_modified_time +
                "')"
            );
          }
        );
      })
    : db.query(
        `UPDATE ems.certificate_details SET reg_no ='${c6_reg_no}',date='${c6_date}',issue='${c6_issue}',place='${c6_place}' WHERE (cand_id = '${cand_id}' AND all_certificate = '${certificate6}' AND active_flag ='${active_flag}')`
      );

  certificates6.length != 0
    ? certificates6.forEach((element) => {
        db.query(
          `UPDATE ems.certificate_details SET active_flag = 'N',last_modified_time ='${last_modified_time}' WHERE (cand_id = '${cand_id}' AND all_certificate = '${certificate7}')`,
          function () {
            db.query(
              "INSERT INTO ems.certificate_details(cand_id,cand_name,all_certificate,reg_no,date,issue,place,Filename,active_flag,last_modified_time) VALUES ('" +
                cand_id +
                "','" +
                name +
                "','" +
                certificate7 +
                "','" +
                c7_reg_no +
                "','" +
                c7_date +
                "','" +
                c7_issue +
                "','" +
                c7_place +
                "','" +
                element.filename +
                "','" +
                active_flag +
                "','" +
                last_modified_time +
                "')"
            );
          }
        );
      })
    : db.query(
        `UPDATE ems.certificate_details SET reg_no ='${c7_reg_no}',date='${c7_date}',issue='${c7_issue}',place='${c7_place}' WHERE (cand_id = '${cand_id}' AND all_certificate = '${certificate7}' AND active_flag ='${active_flag}')`
      );

  certificates7.length != 0
    ? certificates7.forEach((element) => {
        db.query(
          `UPDATE ems.certificate_details SET active_flag = 'N',last_modified_time ='${last_modified_time}' WHERE (cand_id = '${cand_id}' AND all_certificate = '${certificate8}')`,
          function () {
            db.query(
              "INSERT INTO ems.certificate_details(cand_id,cand_name,all_certificate,reg_no,date,issue,place,Filename,active_flag,last_modified_time) VALUES ('" +
                cand_id +
                "','" +
                name +
                "','" +
                certificate8 +
                "','" +
                c8_reg_no +
                "','" +
                c8_date +
                "','" +
                c8_issue +
                "','" +
                c8_place +
                "','" +
                element.filename +
                "','" +
                active_flag +
                "','" +
                last_modified_time +
                "')"
            );
          }
        );
      })
    : db.query(
        `UPDATE ems.certificate_details SET reg_no ='${c8_reg_no}',date='${c8_date}',issue='${c8_issue}',place='${c8_place}' WHERE (cand_id = '${cand_id}' AND all_certificate = '${certificate8}' AND active_flag ='${active_flag}')`
      );

  var sql = `UPDATE ems.cand_profile_details SET name = '${name}', initial='${initial}', initial_expansion='${initial_expansion}',type_of_allotment='${type_of_allotment}', father_name='${father_name}', mother_name='${mother_name}', date_of_birth='${date_of_birth}', gender='${gender}', blood_group='${blood_group}', religion='${religion}', community='${community}', caste='${caste}', nationality='${nationality}', willing_to_donate_blood='${willing_to_donate_blood}', academic_year='${academic_year}', student_code='${student_code}', registered_time='${registered_time}', last_modified_time='${last_modified_time}' WHERE (cand_id = '${cand_id}')`;
  db.query(sql, function () {
    //var sql = `UPDATE ems.cand_admission_details SET cand_name = '${name}',rank ='${rank}', rank_no='${rank_no}', ar_no='${ar_no}', total_mark='${total_mark}', neet_mark='${neet_mark}', reg_no='${reg_no}', neet_roll_no='${neet_roll_no}', course='${course}', admission_type='${admission_type}', admission_quota='${admission_quota}', course_commencement='${course_commencement}', date_of_admission='${date_of_admission}', date_of_allotment='${date_of_allotment}', selected_category='${selected_category}', willing_for_counciling='${willing_for_counciling}', last_modified_time='${last_modified_time}' WHERE (cand_id = '${cand_id}')`;
    var sql =
      "UPDATE `ems`.`cand_admission_details` SET `cand_name`='" +
      name +
      "', `rank` = '" +
      rank +
      "',`rank_no` = '" +
      rank_no +
      "',`ar_no` = '" +
      ar_no +
      "',`total_mark` = '" +
      total_mark +
      "',`neet_mark` = '" +
      neet_mark +
      "',`reg_no` = '" +
      reg_no +
      "',`neet_roll_no` = '" +
      neet_roll_no +
      "',`course` = '" +
      course +
      "',`admission_type` = '" +
      admission_type +
      "',`admission_quota` = '" +
      admission_quota +
      "',`course_commencement` = '" +
      course_commencement +
      "',`date_of_admission` = '" +
      date_of_admission +
      "',`date_of_allotment` = '" +
      date_of_allotment +
      "',`selected_category` = '" +
      selected_category +
      "',`willing_for_counciling` = '" +
      willing_for_counciling +
      "' WHERE (`cand_id` = '" +
      cand_id +
      "');";
    db.query(sql, function () {
      var sql = ` UPDATE ems.cand_address_details SET address_type='${address_type}', ps_address='${ps_address}', ps_pincode='${ps_pincode}', ps_state='${ps_state}', ps_district='${ps_district}', pm_address='${pm_address}', pm_pincode='${pm_pincode}', pm_state='${pm_state}', pm_district='${pm_district}',last_modified_time='${last_modified_time}' WHERE(cand_id='${cand_id}')`;
      db.query(sql, function () {
        var sql = `UPDATE ems.cand_contact_details SET tel_phone ='${tel_phone}', mobile_phone='${mobile_phone}', email_id='${email_id}', aadhar_no='${aadhar_no}', voter_id='${voter_id}', remarks='${remarks}',last_modified_time='${last_modified_time}' WHERE(cand_id ='${cand_id}')`;
        db.query(sql, function () {
          var sql = `UPDATE ems.cand_institute_details_mdms SET name='${institute_name}',post='${college_post}',amount_of_agreement ='${amount_of_agreement}',period_of_agreement='${period_of_agreement}',last_modified_time='${last_modified_time}' WHERE (cand_id ='${cand_id}')`;
          db.query(sql, function () {
            var sql = `UPDATE ems.cand_academic_mdms SET mbbs_name ='${mbbs_name}', mbbs_place='${mbbs_place}', mbbs_district='${mbbs_district}', mbbs_state='${mbbs_state}', mbbs_university='${mbbs_university}', mbbs_marksheet_no='${mbbs_marksheet_no}', mbbs_passing_month='${mbbs_passing_month}', mbbs_passing_year='${mbbs_passing_year}', mbbs_speciality='${mbbs_speciality}',last_modified_time='${last_modified_time}' WHERE(cand_id='${cand_id}')`;
            db.query(sql, function () {
              var sql = `UPDATE ems.cand_academic_mdms_1 SET pg_diplamo_name='${pg_diplamo_name}', pg_diplamo_place='${pg_diplamo_place}', pg_diplamo_district='${pg_diplamo_district}', pg_diplamo_state='${pg_diplamo_state}', pg_diplamo_university='${pg_diplamo_university}', pg_diplamo_marksheet_no='${pg_diplamo_marksheet_no}', pg_diplamo_passing_month='${pg_diplamo_passing_month}', pg_diplamo_passing_year='${pg_diplamo_passing_year}', pg_diplamo_speciality ='${pg_diplamo_speciality}',last_modified_time='${last_modified_time}' WHERE(cand_id='${cand_id}')`;
              db.query(sql, function () {
                var sql = `UPDATE ems.cand_academic_mdms_2 SET mdms_name ='${mdms_name}', mdms_place='${mdms_place}', mdms_district='${mdms_district}', mdms_state='${mdms_state}', mdms_university='${mdms_university}', mdms_marksheet_no='${mdms_marksheet_no}', mdms_passing_month='${mdms_passing_month}', mdms_passing_year='${mdms_passing_year}', mdms_speciality='${mdms_speciality}',last_modified_time='${last_modified_time}' WHERE(cand_id='${cand_id}')`;
                db.query(sql, function () {
                  var sql = `UPDATE ems.cand_neet_marks_mdms SET mbbs_marks='${mbbs_marks}', pg_diplamo_marks='${pg_diplamo_marks}', mdms_marks ='${mdms_marks}', neet_percentile ='${neet_percentile}',last_modified_time='${last_modified_time}' WHERE (cand_id ='${cand_id}')`;
                  db.query(sql, function () {
                    var sql = `UPDATE ems.cand_bank_details SET account_no = '${account_no}', bank_name = '${bank_name}', branch_name = '${branch_name}', ifsc = '${ifsc}', micr = '${micr}', pan_no = '${pan_no}',last_modified_time='${last_modified_time}' WHERE(cand_id = '${cand_id}')`;
                    db.query(sql, function () {
                      var sql = `UPDATE ems.cand_surety_details SET  surety_one_name = '${surety_one_name}', surety_one_aadhaar = '${surety_one_aadhaar}', surety_one_pan = '${surety_one_pan}', surety_one_address = '${surety_one_address}', surety_two_name = '${surety_two_name}', surety_two_aadhaar = '${surety_two_aadhaar}', surety_two_pan = '${surety_two_pan}', surety_two_address = '${surety_two_address}', surety_three_name = '${surety_three_name}', surety_three_aadhaar ='${surety_three_aadhaar}', surety_three_pan ='${surety_three_pan}', surety_three_address ='${surety_three_address}',last_modified_time='${last_modified_time}' WHERE (cand_id = '${cand_id}')`;
                      db.query(sql, function () {
                        var sql = `UPDATE ems.cand_relieving_details SET relieved = '${relieved}',amount_refunded = '${amount_refunded}',date_of_relieving = '${date_of_relieving}',date_of_reallotment = '${date_of_reallotment}',college_name = '${college_name}',last_modified_time='${last_modified_time}' WHERE (cand_id = '${cand_id}')`;
                        db.query(sql, function () {
                          var sql = `UPDATE ems.cand_institute_details SET institute_name ='${institute_name}', place ='${place}', district='${district}', state='${state}', relieving_date='${relieving_date}', duration='${duration}', exam_passed='${exam_passed}', register_no='${register_no}', month_of_passing='${month_of_passing}', year_of_passing='${year_of_passing}', board='${board}', last_modified_time='${last_modified_time}' WHERE (cand_id='${cand_id}')`;
                          db.query(sql, function () {
                            var sql = `UPDATE ems.cand_neet_mark_details SET phy_mark='${phy_neet_mark}', phy_max_mark='${phy_neet_max}', chem_mark='${chem_neet_mark}', chem_max_mark='${chem_neet_max}', bio_mark='${bio_neet_mark}', bio_max_mark='${bio_neet_max}', agg_mark='${agg_neet_mark}', agg_max_mark='${agg_neet_max}', last_modified_time='${last_modified_time}' WHERE (cand_id = '${cand_id}')`;
                            db.query(sql, function () {
                              var sql = `UPDATE ems.cand_marks_details SET lang_theory='${lang_theory}', lang_practical='${lang_practical}', lang_internal='${lang_internal}', lang_total='${lang_total}', lang_max='${lang_max}', eng_theory='${eng_theory}', eng_practical='${eng_practical}', eng_internal='${eng_internal}', eng_total='${eng_total}', eng_max='${eng_max}', mat_theory='${mat_theory}', mat_practical='${mat_practical}', mat_internal='${mat_internal}', mat_total='${mat_total}', mat_max='${mat_max}', phy_theory='${phy_theory}', phy_practical='${phy_practical}', phy_internal='${phy_internal}', phy_total='${phy_total}', phy_max='${phy_max}', chem_theory='${chem_theory}', chem_practical='${chem_practical}', chem_internal='${chem_internal}', chem_total='${chem_total}', chem_max='${chem_max}', bio_theory='${bio_theory}', bio_practical='${bio_practical}', bio_internal='${bio_internal}', bio_total='${bio_total}', bio_max='${bio_max}', bot_theory='${bot_theory}', bot_practical='${bot_practical}', bot_internal='${bot_internal}', bot_total='${bot_total}',bot_max='${bot_max}', zoo_theory='${zoo_theory}', zoo_practical='${zoo_practical}', zoo_internal='${zoo_internal}', zoo_total='${zoo_total}', zoo_max='${zoo_max}', lang_paper='${lang_paper}', subj_code='${subj_code}', total_mark='${total_mark}', max_mark='${max_mark}' WHERE (cand_id = '${cand_id}')`;
                              db.query(sql, function () {
                                switch (course) {
                                  case "MBBS":
                                    user.mbbs_board(req, res);
                                    break;
                                  case "MDMS":
                                    user.mdms_board(req, res);
                                    break;
                                  default:
                                    null;
                                    break;
                                }
                              });
                            });
                          });
                        });
                      });
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  });
};
