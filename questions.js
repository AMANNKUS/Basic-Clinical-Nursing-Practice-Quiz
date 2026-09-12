// Basic Clinical Nursing question bank
// The correct answer is stored as an option letter in correctAnswer.
// rationaleCorrect explains the correct option first; rationalesIncorrect explains each distractor separately.

const questions = [
  {
    number: 1,
    question: "Baby Amina's temperature was checked at 8:00 a.m. and it was 41°C. How should this temperature be classified?",
    options: {
      A: "Fever",
      B: "High fever",
      C: "Hyperpyrexia"
    },
    correctAnswer: "C",
    rationaleCorrect: "Hyperpyrexia is an extremely high body temperature, commonly defined as a core temperature above 41°C. It is a medical emergency because temperatures at this level can cause neurologic injury, dehydration, seizures and organ dysfunction; the nurse should verify the reading promptly, assess the child and initiate urgent management according to protocol.",
    rationalesIncorrect: {
      A: "Fever is a general rise in body temperature above the normal range, but it does not adequately describe the severity of a reading of 41°C.",
      B: "High fever is a descriptive phrase, whereas hyperpyrexia is the more precise clinical classification for an exceptionally high temperature around or above 41°C."
    }
  },
  {
    number: 2,
    question: "Which position is most appropriate for a patient who has markedly laboured breathing?",
    options: {
      A: "Fowler's position",
      B: "Semi-Fowler's position",
      C: "Trendelenburg position"
    },
    correctAnswer: "A",
    rationaleCorrect: "Fowler's position places the patient upright, usually at approximately 45–60 degrees; high Fowler's may be used when severe dyspnoea requires greater elevation. Upright positioning lowers abdominal pressure on the diaphragm, promotes maximum chest expansion and reduces the work of breathing while the nurse assesses oxygenation and obtains further assistance.",
    rationalesIncorrect: {
      B: "Semi-Fowler's position, at about 30–45 degrees, can improve ventilation and may be used when full elevation is not tolerated. However, Fowler's position generally provides greater thoracic expansion for marked laboured breathing.",
      C: "Trendelenburg position lowers the head below the feet. It restricts diaphragmatic movement and can worsen respiratory distress, so it is inappropriate for a patient with laboured breathing."
    }
  },
  {
    number: 3,
    question: "Which action is essential for obtaining an accurate axillary temperature?",
    options: {
      A: "Keep a jar of disinfectant beside the patient",
      B: "Provide every patient with a personal thermometer",
      C: "Dry the axilla before placing the thermometer"
    },
    correctAnswer: "C",
    rationaleCorrect: "The axilla should be dry before the thermometer probe is positioned against the skin. Moisture from sweat can cool the skin through evaporation and interfere with heat transfer, producing a falsely low or inconsistent reading; the arm should then be held snugly against the chest for the required measurement time.",
    rationalesIncorrect: {
      A: "Appropriate cleaning of reusable equipment is important for infection prevention, but the presence of a disinfectant jar does not make the temperature reading itself accurate. Equipment must be reprocessed according to the manufacturer's instructions rather than left routinely in a jar.",
      B: "Individual equipment can reduce cross-contamination, but it is not essential to measurement accuracy when approved disposable covers and correct disinfection procedures are used."
    }
  },
  {
    number: 4,
    question: "Among the following routes, which generally provides the closest estimate of core body temperature?",
    options: {
      A: "Axillary",
      B: "Inguinal",
      C: "Rectal"
    },
    correctAnswer: "C",
    rationaleCorrect: "Rectal temperature usually reflects core temperature more closely than superficial skin-fold sites because the rectum is less affected by ambient temperature. The route is not appropriate for every patient, including some patients with rectal disease, neutropenia, thrombocytopenia or recent rectal surgery, so safety and institutional policy must still guide its use.",
    rationalesIncorrect: {
      A: "Axillary measurement is safe and non-invasive, but it is more affected by skin temperature, sweating and probe placement and is generally less accurate than rectal measurement.",
      B: "The inguinal site is a peripheral skin-fold site. Its reading is more influenced by local skin conditions and the environment and is not usually the best estimate of core temperature."
    }
  },
  {
    number: 5,
    question: "A 70-year-old unconscious patient is receiving care. Which findings most clearly indicate an immediate need for mouth care? I. Cracked lips II. Grey, coated tongue III. Pale oral mucosa",
    options: {
      A: "I and II",
      B: "I and III",
      C: "II and III"
    },
    correctAnswer: "A",
    rationaleCorrect: "Cracked lips and a grey or coated tongue are direct signs of oral dryness, accumulated debris and inadequate oral cleansing. An unconscious patient cannot perform self-care and may breathe through the mouth, so frequent oral assessment, gentle cleaning, moisturising of the lips and aspiration precautions are necessary.",
    rationalesIncorrect: {
      B: "Cracked lips indicate a need for mouth care, but pallor is more strongly associated with reduced haemoglobin or perfusion. Pallor requires assessment of the patient's systemic condition rather than being treated as evidence of poor oral hygiene alone.",
      C: "A coated tongue supports the need for mouth care, but pale mucosa is primarily a clinical sign requiring investigation for anaemia or poor perfusion. This pair is therefore less specific for immediate oral hygiene needs than cracked lips plus a coated tongue."
    }
  },
  {
    number: 6,
    question: "Which general rule should the nurse follow before beginning bed making?",
    options: {
      A: "Collect all required equipment before starting",
      B: "Remove every pillow except one",
      C: "Remove and fold the blanket before assessing the patient"
    },
    correctAnswer: "A",
    rationaleCorrect: "Collecting clean linen and all required equipment before beginning promotes an organised, uninterrupted procedure. It prevents the nurse from leaving a vulnerable patient unattended, reduces unnecessary movement between clean and contaminated areas and supports safe body mechanics.",
    rationalesIncorrect: {
      B: "The number of pillows retained depends on the patient's condition, comfort and prescribed position. Removing pillows is not a universal rule and could compromise alignment or breathing.",
      C: "Blankets may be removed or folded during the procedure, but the nurse must first assess the patient, explain the procedure, provide privacy and organise supplies. It is not the most important general rule before starting."
    }
  },
  {
    number: 7,
    question: "Madam Adisa, who has breast cancer, repeatedly asks, ‘Why me?’ and ‘Why now?’ Which stage of grief is most consistent with these statements?",
    options: {
      A: "Acceptance",
      B: "Anger",
      C: "Bargaining"
    },
    correctAnswer: "B",
    rationaleCorrect: "Questions such as ‘Why me?’ commonly express anger, unfairness, resentment or frustration following a serious diagnosis. Grief responses are not always linear, so the nurse should acknowledge the emotion, listen without judgement and avoid forcing the patient into a particular stage.",
    rationalesIncorrect: {
      A: "Acceptance involves recognising the reality of the loss or illness and beginning to adapt to it. The patient's repeated questioning reflects distress and perceived unfairness rather than peaceful acknowledgement.",
      C: "Bargaining usually involves attempts to negotiate for more time or a different outcome, often through ‘if only’ or ‘I promise’ statements. No negotiation is expressed in this scenario."
    }
  },
  {
    number: 8,
    question: "Which term describes a normal, quiet breathing pattern with an appropriate rate and depth?",
    options: {
      A: "Apnoea",
      B: "Bradypnoea",
      C: "Eupnoea"
    },
    correctAnswer: "C",
    rationaleCorrect: "Eupnoea means normal, effortless breathing with a regular rhythm and appropriate rate and depth for the person's age and clinical condition. It indicates that no obvious abnormal respiratory pattern is present at the time of assessment.",
    rationalesIncorrect: {
      A: "Apnoea is the temporary or sustained absence of breathing. It is abnormal and may require immediate intervention.",
      B: "Bradypnoea is an abnormally slow respiratory rate. Even when respirations appear deep or regular, a rate below the expected range is not eupnoea."
    }
  },
  {
    number: 9,
    question: "Which site is most appropriate among the options for measuring the temperature of a severely emaciated patient?",
    options: {
      A: "Axilla",
      B: "Groin",
      C: "Tympanic membrane"
    },
    correctAnswer: "C",
    rationaleCorrect: "A tympanic thermometer can provide a rapid estimate of core temperature without depending on close contact between poorly padded skin surfaces. In a severely emaciated patient, loss of subcutaneous tissue can prevent the axilla or groin from closing firmly around a probe and may reduce the reliability of those sites.",
    rationalesIncorrect: {
      A: "The axillary route requires firm skin-to-probe contact. Marked tissue loss and difficulty holding the arm securely can make the reading less reliable.",
      B: "The groin is also a peripheral skin-fold site, and severe loss of soft tissue can reduce contact and accuracy. It is less practical than a correctly performed tympanic measurement."
    }
  },
  {
    number: 10,
    question: "In which position should a 10-year-old child usually be placed for insertion of a paracetamol suppository?",
    options: {
      A: "Dorsal recumbent",
      B: "Genupectoral",
      C: "Left lateral"
    },
    correctAnswer: "C",
    rationaleCorrect: "The left lateral or Sims' position provides safe access to the rectum, supports privacy and follows the natural direction of the lower bowel. The upper leg is flexed, the buttocks are separated gently and the child is encouraged to remain still after insertion so the suppository is retained.",
    rationalesIncorrect: {
      A: "The dorsal recumbent position can expose the rectal area but generally offers less privacy and less convenient access than the lateral position for suppository administration.",
      B: "The genupectoral or knee-chest position is unnecessarily uncomfortable and unstable for routine suppository insertion and is used for selected examinations or procedures instead."
    }
  },
  {
    number: 11,
    question: "Which activities are appropriate during admission of a patient? I. Prevent physical and psychological harm II. Treat the patient and relatives with courtesy III. Collect necessary patient information IV. Make payment of bills the first clinical priority",
    options: {
      A: "I, II and III",
      B: "I, II and IV",
      C: "II, III and IV"
    },
    correctAnswer: "A",
    rationaleCorrect: "Admission begins with safety, respectful communication and systematic collection of information needed for assessment and care planning. These actions reduce anxiety, identify immediate risks and establish a therapeutic relationship while protecting the patient's dignity.",
    rationalesIncorrect: {
      B: "Safety and courtesy are appropriate, but payment is an administrative matter and must not replace urgent assessment or necessary clinical care as the first priority.",
      C: "Courtesy and information gathering are appropriate, but this combination omits prevention of physical and psychological harm and wrongly gives priority to billing."
    }
  },
  {
    number: 12,
    question: "Mr Fordjour is moved from the surgical ward to the medical ward in the same hospital for continued treatment. From the medical ward's perspective, this is called:",
    options: {
      A: "Transfer-in",
      B: "Transfer-out",
      C: "Referral"
    },
    correctAnswer: "A",
    rationaleCorrect: "The medical ward is receiving the patient, so the movement is documented there as a transfer-in. Safe transfer includes clinical handover, verification of identity, medication and treatment information, current observations and the patient's belongings.",
    rationalesIncorrect: {
      B: "Transfer-out describes the event from the surgical ward that is sending the patient. It is not the correct term from the receiving medical ward's perspective.",
      C: "A referral requests assessment or management by another professional or service and may not involve physical movement. Movement between wards in the same hospital is an internal transfer."
    }
  },
  {
    number: 13,
    question: "Which nursing actions are most appropriate for reducing the anxiety of a newly admitted patient?",
    options: {
      A: "Introduce yourself and the patient to relevant people, isolate the patient and orient the patient to the ward",
      B: "Introduce yourself and the patient to relevant people, then isolate the patient",
      C: "Introduce yourself, introduce the patient to relevant staff or patients and orient the patient to the ward"
    },
    correctAnswer: "C",
    rationaleCorrect: "A calm introduction and orientation make the environment more predictable and help establish trust. The nurse should explain routines, call-bell use, facilities and relevant staff roles while respecting privacy and the patient's readiness to meet others.",
    rationalesIncorrect: {
      A: "Introduction and orientation are helpful, but isolation is used only when a clinical indication and the required transmission-based precautions exist. Unnecessary isolation can increase fear and loneliness.",
      B: "This option unnecessarily isolates the patient and omits orientation to the ward environment. Isolation is not a routine intervention for admission anxiety."
    }
  },
  {
    number: 14,
    question: "When should planning for a patient's discharge begin?",
    options: {
      A: "On the day of admission",
      B: "On the day of discharge",
      C: "On the second day of admission"
    },
    correctAnswer: "A",
    rationaleCorrect: "Discharge planning begins at admission because the team must identify likely support needs, medicines, equipment, education, follow-up and barriers to safe care at home. Early planning allows the patient, family and multidisciplinary team enough time to prepare and reduces avoidable delays or readmissions.",
    rationalesIncorrect: {
      B: "Beginning on the day of discharge leaves insufficient time to assess learning, arrange community support or obtain equipment and medicines. Important needs may be missed.",
      C: "There is no reason to delay routinely until the second day. Relevant discharge needs should be identified during the initial assessment and reviewed throughout admission."
    }
  },
  {
    number: 15,
    question: "Which statement correctly distinguishes surgical asepsis from medical asepsis?",
    options: {
      A: "Surgical asepsis eliminates all microorganisms, including spores, while medical asepsis reduces their number and spread",
      B: "Surgical asepsis removes visible dirt only, while medical asepsis sterilises equipment",
      C: "Surgical asepsis and medical asepsis have exactly the same meaning"
    },
    correctAnswer: "A",
    rationaleCorrect: "Surgical asepsis, or sterile technique, is intended to maintain an area free of all microorganisms, including bacterial spores. Medical asepsis, or clean technique, lowers the number of organisms and interrupts their transfer; the level required depends on the procedure and the patient's risk.",
    rationalesIncorrect: {
      B: "Removal of visible dirt is cleaning, not surgical asepsis. Sterilisation is associated with surgical asepsis rather than being the defining action of medical asepsis.",
      C: "The terms are related but not interchangeable. Medical asepsis reduces contamination, whereas surgical asepsis aims to create and maintain sterility."
    }
  },
  {
    number: 16,
    question: "Which method makes a reusable instrument intended to enter sterile tissue safe for use?",
    options: {
      A: "Antisepsis",
      B: "Decontamination alone",
      C: "Sterilisation"
    },
    correctAnswer: "C",
    rationaleCorrect: "A critical instrument that will enter sterile tissue or the vascular system must be sterilised after appropriate cleaning. Sterilisation destroys all viable microorganisms, including bacterial spores, and the item must then be stored and handled in a way that preserves sterility.",
    rationalesIncorrect: {
      A: "Antisepsis uses an antimicrobial product on living tissue such as skin. It is not the reprocessing method for instruments.",
      B: "Decontamination reduces contamination and makes handling safer, but it does not necessarily destroy all organisms or spores. It is a preliminary process rather than the final requirement for a critical instrument."
    }
  },
  {
    number: 17,
    question: "Mr Nyamekye is admitted with infectious pulmonary tuberculosis. Which placement is most appropriate among the options?",
    options: {
      A: "Place him in a side room designated for airborne isolation",
      B: "Place him in the main ward and screen the bed",
      C: "Place him on a corner bed in the main ward"
    },
    correctAnswer: "A",
    rationaleCorrect: "Pulmonary tuberculosis is transmitted through airborne droplet nuclei. The patient should be placed in an airborne-infection isolation room, ideally a negative-pressure room with appropriate ventilation; staff should use a fit-tested particulate respirator and follow the facility's airborne-precaution policy.",
    rationalesIncorrect: {
      B: "A curtain or screen provides visual privacy but does not control airborne particles, which can remain suspended and move through shared air.",
      C: "A corner bed does not provide the ventilation or separation required for airborne precautions and exposes other patients and staff to avoidable risk."
    }
  },
  {
    number: 18,
    question: "Which community measure most directly interrupts faecal–oral transmission of disease?",
    options: {
      A: "Barrier nursing alone",
      B: "General infection-prevention messages without water and sanitation measures",
      C: "Safe water, safe food handling and adequate sanitation"
    },
    correctAnswer: "C",
    rationaleCorrect: "Faecal–oral pathogens spread when organisms from faeces contaminate hands, food or water and are then swallowed. Safe drinking water, sanitation, correct disposal of faeces, handwashing and hygienic preparation of food directly break this route of transmission.",
    rationalesIncorrect: {
      A: "Barrier nursing may be required when caring for an infected patient, but it does not by itself address contaminated food, water and sanitation in the wider community.",
      B: "General messages are insufficient unless they are translated into specific actions such as handwashing, safe water treatment, sanitation and food hygiene."
    }
  },
  {
    number: 19,
    question: "From which sources does the human body normally obtain water?",
    options: {
      A: "Drinks, water contained in food and water produced during metabolism",
      B: "Breathing alone",
      C: "Absorption through intact skin and stored body fat alone"
    },
    correctAnswer: "A",
    rationaleCorrect: "The body obtains most water from beverages and the water naturally present in foods. A smaller amount, called metabolic water, is formed when nutrients are oxidised during cellular metabolism; together these sources contribute to daily fluid balance.",
    rationalesIncorrect: {
      B: "Breathing is a route of insensible water loss, not a meaningful source of water intake. Water vapour leaves the body in exhaled air.",
      C: "Intact skin is a protective barrier and does not normally absorb enough environmental water to maintain hydration. Stored fat can yield some metabolic water when oxidised, but it is not an adequate source by itself."
    }
  },
  {
    number: 20,
    question: "Which action is most appropriate when moving an unconscious patient across a bed or onto another surface?",
    options: {
      A: "Use the drawsheet beneath the patient with enough trained staff or a suitable transfer aid",
      B: "Ask one nurse to support the bed while another lifts the patient manually",
      C: "Use only two nurses regardless of the patient's size or condition"
    },
    correctAnswer: "A",
    rationaleCorrect: "A drawsheet, friction-reducing device or mechanical aid allows the team to move an unconscious patient while maintaining alignment and reducing friction and shear. The number of staff and type of aid should be based on the patient's size, condition and ability to assist, with one person coordinating the move.",
    rationalesIncorrect: {
      B: "Supporting the bed does not make a two-person manual lift safe. The bed should be locked, adjusted to a suitable height and the move should use adequate staff and equipment.",
      C: "There is no universally safe number of two staff members. An unconscious or heavy patient may require additional staff or a mechanical transfer device to prevent injury to the patient and workers."
    }
  },
  {
    number: 21,
    question: "A patient has been vomiting and passing frequent watery stools. Which route of medication administration should generally be avoided until the patient is assessed?",
    options: {
      A: "Intramuscular",
      B: "Intravenous",
      C: "Oral"
    },
    correctAnswer: "C",
    rationaleCorrect: "The oral route is unreliable when a patient is actively vomiting because the medicine may be expelled before absorption. Severe diarrhoea can also alter gastrointestinal transit and absorption, and oral intake may be unsafe if the patient is dehydrated, drowsy or unable to protect the airway; the prescriber should select an appropriate alternative.",
    rationalesIncorrect: {
      A: "An intramuscular medicine bypasses the gastrointestinal tract, although absorption may be unpredictable in severe shock or poor perfusion. It is not automatically contraindicated simply because the patient has vomiting and diarrhoea.",
      B: "The intravenous route bypasses gastrointestinal absorption and can provide fluids or medicines rapidly when clinically indicated. It requires a valid prescription, correct access and close monitoring but is not the route that should be avoided for this reason."
    }
  },
  {
    number: 22,
    question: "If the dorsogluteal region is used for an intramuscular injection, which quadrant is selected to reduce the risk of injury to the sciatic nerve?",
    options: {
      A: "Lower inner quadrant",
      B: "Lower outer quadrant",
      C: "Upper outer quadrant"
    },
    correctAnswer: "C",
    rationaleCorrect: "The upper outer quadrant is used when the dorsogluteal region is selected because it lies farther from the sciatic nerve and major blood vessels. Many contemporary guidelines prefer the ventrogluteal site, identified by anatomical landmarks, because it has fewer large nerves and vessels; facility policy and practitioner competence should guide site selection.",
    rationalesIncorrect: {
      A: "The lower inner quadrant lies close to the sciatic nerve and major structures. Injection there can cause severe nerve or vascular injury.",
      B: "The lower outer quadrant is not the recommended dorsogluteal injection area and does not provide the established safety margin from important nerves and vessels."
    }
  },
  {
    number: 23,
    question: "A patient tells the nurse that a medicine looks different from what she has previously received. What is the nurse's best response?",
    options: {
      A: "Go ahead and take it; it is probably correct",
      B: "I will withhold it temporarily and recheck the medication order",
      C: "I will leave it at your bedside while I contact the doctor"
    },
    correctAnswer: "B",
    rationaleCorrect: "A patient's concern about a medicine is a safety alert. The nurse should pause administration and compare the prescription, medication administration record, label, dose, route, timing and patient identity; any unresolved discrepancy must be clarified with the pharmacist or prescriber before the medicine is given.",
    rationalesIncorrect: {
      A: "Dismissing the concern and administering an unverified medicine violates safe medication practice and could expose the patient to the wrong drug or dose.",
      C: "Medication should not be left unattended at the bedside because another person could take it, the dose could be missed or the drug could be altered. The nurse should retain control of it while checking the order."
    }
  },
  {
    number: 24,
    question: "Which technique gives the most accurate measurement of a liquid medicine in a medicine cup?",
    options: {
      A: "Hold the cup in the hand and mark the level with the thumb",
      B: "Place the cup on a flat surface and read the required level at eye level",
      C: "Estimate the amount while pouring above eye level"
    },
    correctAnswer: "B",
    rationaleCorrect: "A medicine cup should be placed on a stable, level surface, and the liquid should be poured to the prescribed graduation. Reading the appropriate part of the meniscus at eye level prevents parallax error and improves dose accuracy; an oral syringe is preferable for small or highly precise volumes.",
    rationalesIncorrect: {
      A: "Holding the cup can tilt it, and a thumb is not an accurate measuring mark. This method increases the risk of giving too much or too little medicine.",
      C: "Estimating from above or below eye level creates parallax error. Medication doses must be measured against a calibrated marking rather than judged visually."
    }
  },
  {
    number: 25,
    question: "Which sites are appropriate and readily accessible for a patient who will self-administer subcutaneous insulin at home?",
    options: {
      A: "Abdomen and anterior or outer aspects of the thighs",
      B: "Abdomen and scapular areas of the upper back",
      C: "Outer upper arm and dorsogluteal intramuscular area"
    },
    correctAnswer: "A",
    rationaleCorrect: "The abdomen and anterior-lateral thighs contain suitable subcutaneous tissue and are usually accessible for self-injection. The abdomen generally provides the most consistent absorption; the patient should rotate injections systematically within the selected region, avoid lipohypertrophy, scars and inflamed skin, and use the technique taught for the prescribed insulin.",
    rationalesIncorrect: {
      B: "The posterior upper back can contain subcutaneous tissue, but it is difficult for most patients to reach and inspect reliably. It is therefore less suitable for independent self-injection.",
      C: "The outer upper arm can be used for subcutaneous injections when adequate tissue can be pinched, but the dorsogluteal area is associated with intramuscular injections and is not a standard insulin site."
    }
  },
  {
    number: 26,
    question: "What is the process of adding a specified diluent to a powdered medicine to prepare it for administration called?",
    options: {
      A: "Dilution",
      B: "Mixing",
      C: "Reconstitution"
    },
    correctAnswer: "C",
    rationaleCorrect: "Reconstitution means adding the exact type and volume of diluent specified by the manufacturer to a powdered medication to produce a solution or suspension of known concentration. The nurse must use aseptic technique, calculate the final concentration correctly and observe storage and expiry instructions after reconstitution.",
    rationalesIncorrect: {
      A: "Dilution reduces the concentration of a medicine that is already in solution by adding more diluent. It is different from turning a dry powder into its usable liquid form.",
      B: "Mixing is a general action and does not identify the controlled preparation of a powdered drug using a specified diluent and final concentration."
    }
  },
  {
    number: 27,
    question: "When instilling ear drops in a 45-year-old patient, how should the nurse straighten the ear canal?",
    options: {
      A: "Pull the pinna downward and backward",
      B: "Pull the pinna downward and outward",
      C: "Pull the pinna upward and backward"
    },
    correctAnswer: "C",
    rationaleCorrect: "In an adult, the pinna is pulled gently upward and backward to straighten the external auditory canal. The drops are placed along the side of the canal without touching the dropper tip, and the patient keeps the treated ear upward for the recommended time.",
    rationalesIncorrect: {
      A: "Pulling down and back is used for infants and young children because their auditory canal has a different angle. It does not straighten the adult canal effectively.",
      B: "Downward and outward traction is not the standard direction for an adult and may not align the canal for correct instillation."
    }
  },
  {
    number: 28,
    question: "Which action helps a rectal suppository remain in place long enough to dissolve and be absorbed?",
    options: {
      A: "Ask the patient to remain in the lateral position for several minutes after insertion",
      B: "Keep the patient nil by mouth before administration",
      C: "Insert the suppository only as far as the anal opening"
    },
    correctAnswer: "A",
    rationaleCorrect: "Remaining in the lateral position and relaxing the buttocks for several minutes reduces the chance that the suppository will be expelled immediately. The suppository must be placed beyond the internal anal sphincter according to age and product guidance, and the patient should avoid defecating for the recommended period when possible.",
    rationalesIncorrect: {
      B: "Nil-by-mouth status affects oral intake and is not routinely required for a rectal medicine. The nurse instead assesses rectal contraindications and the patient's bowel pattern.",
      C: "A suppository left at the anal opening is likely to be expelled and may not dissolve or absorb properly. It should be inserted gently beyond the sphincter, not forced."
    }
  },
  {
    number: 29,
    question: "How should a nurse hold a medicine bottle while pouring to prevent liquid from damaging the label?",
    options: {
      A: "Close the stopper only after completing the entire medication round",
      B: "Cover the label with the palm while allowing drips to run over it",
      C: "Hold the bottle with the label against the palm and uppermost"
    },
    correctAnswer: "C",
    rationaleCorrect: "Holding the bottle with the label uppermost and against the palm directs any drip toward the side opposite the label. Keeping the label legible is essential because the nurse must be able to verify the drug name, strength, expiry date and other safety information each time it is used.",
    rationalesIncorrect: {
      A: "The bottle should be recapped promptly after pouring to prevent contamination, spills or deterioration. Delayed replacement of the cap does not protect the label.",
      B: "Merely covering the label does not control the direction of drips and may contaminate the hand or smear the label. The bottle should be oriented so liquid runs away from it."
    }
  },
  {
    number: 30,
    question: "Madam Mansah develops a sudden, severe systemic hypersensitivity reaction immediately after receiving a medicine. What is this reaction called?",
    options: {
      A: "Anaphylaxis",
      B: "Mild drug allergy",
      C: "Drug tolerance"
    },
    correctAnswer: "A",
    rationaleCorrect: "Anaphylaxis is a rapid, potentially fatal systemic hypersensitivity reaction that may cause airway swelling, wheeze, hypotension, collapse, widespread urticaria or gastrointestinal symptoms. The nurse must stop the suspected trigger, activate emergency help and follow the anaphylaxis protocol; intramuscular adrenaline is the first-line medication when diagnostic criteria are met.",
    rationalesIncorrect: {
      B: "A drug allergy can range from a limited rash to severe anaphylaxis. Calling a sudden severe systemic reaction merely a mild allergy understates the urgency and does not identify the emergency syndrome.",
      C: "Drug tolerance is a reduced response after repeated exposure, leading to a need for a larger dose to obtain the same effect. It does not cause an acute hypersensitivity emergency."
    }
  },
  {
    number: 31,
    question: "When should an oral iron preparation generally be given to maximise absorption?",
    options: {
      A: "Immediately after a full meal",
      B: "On an empty stomach, such as before meals, if tolerated",
      C: "Only two hours after every meal"
    },
    correctAnswer: "B",
    rationaleCorrect: "Oral iron is absorbed best on an empty stomach, commonly about one hour before or two hours after food. It may be taken with a source of vitamin C when appropriate; if gastrointestinal irritation occurs, the prescriber may advise taking it with a small amount of food, accepting some reduction in absorption.",
    rationalesIncorrect: {
      A: "Food—especially calcium-rich products, tea, coffee and some high-phytate foods—can reduce iron absorption. Taking iron after a full meal may improve tolerance but does not maximise absorption.",
      C: "Two hours after a meal is a valid empty-stomach interval, but the word ‘only’ makes the statement unnecessarily restrictive. Before-meal administration is also appropriate when tolerated."
    }
  },
  {
    number: 32,
    question: "Which statement about specimen collection is incorrect?",
    options: {
      A: "A merely clean, non-sterile container is sufficient for every bacteriological specimen",
      B: "The specimen should be labelled correctly and sent to the laboratory promptly",
      C: "The specimen should be protected from contamination during collection"
    },
    correctAnswer: "A",
    rationaleCorrect: "A specimen intended for culture generally requires the laboratory-approved sterile container and an aseptic collection technique. A merely clean household or non-sterile container can introduce organisms, produce false culture results and lead to inappropriate treatment.",
    rationalesIncorrect: {
      B: "This is correct practice. Accurate patient identifiers, specimen type, date and time, and prompt transport preserve traceability and specimen quality.",
      C: "This is also correct practice. Although a body site cannot always be made sterile, the nurse must minimise external contamination so the sample represents the material being investigated."
    }
  },
  {
    number: 33,
    question: "Which practice is the single most important routine measure for reducing transmission of infection in healthcare?",
    options: {
      A: "Cleaning the environment",
      B: "Decontaminating soiled equipment",
      C: "Performing hand hygiene at the appropriate moments"
    },
    correctAnswer: "C",
    rationaleCorrect: "Hands are a major route by which microorganisms move between patients, staff, equipment and surfaces. Correct hand hygiene before and after relevant contact, after body-fluid exposure and after removing gloves interrupts this transmission; soap and water is required when hands are visibly soiled and in selected infections such as suspected spore contamination.",
    rationalesIncorrect: {
      A: "Environmental cleaning is an essential part of infection prevention, especially for high-touch surfaces, but it cannot replace hand hygiene during patient care.",
      B: "Correct decontamination prevents contaminated equipment from transmitting organisms, but staff hands can still spread pathogens during numerous routine contacts if hand hygiene is missed."
    }
  },
  {
    number: 34,
    question: "Which finding is primarily subjective and must be described by the patient?",
    options: {
      A: "Visible use of accessory muscles while breathing",
      B: "Observed watery stool",
      C: "Nausea"
    },
    correctAnswer: "C",
    rationaleCorrect: "Nausea is an unpleasant internal sensation of wanting to vomit. Because it cannot be measured or directly observed, it is a symptom obtained from the patient's report, although associated signs such as pallor or salivation may be seen.",
    rationalesIncorrect: {
      A: "Accessory-muscle use is an objective sign that the nurse can observe during respiratory assessment. A patient may also report breathlessness, but the visible finding itself is not purely subjective.",
      B: "The nurse can observe and describe stool frequency, volume and consistency, making watery stool an objective finding even though the patient may also report diarrhoea."
    }
  },
  {
    number: 35,
    question: "What term describes microorganisms that normally live on or in the body without causing disease in their usual location?",
    options: {
      A: "Escherichia coli in every body site",
      B: "Normal bacteria only",
      C: "Normal microbiota or normal flora"
    },
    correctAnswer: "C",
    rationaleCorrect: "Normal microbiota, traditionally called normal flora, are microorganisms that colonise particular body sites without normally causing disease there. They may protect the host by competing with pathogens, but some can cause opportunistic infection if they enter a sterile site or host defences are impaired.",
    rationalesIncorrect: {
      A: "E. coli can be part of normal intestinal microbiota, but it can cause disease in the urinary tract, bloodstream or other normally sterile sites. One organism cannot define the entire normal microbiota.",
      B: "The normal microbiota includes more than bacteria; fungi, viruses and other microorganisms may also be present. ‘Normal bacteria’ is therefore too narrow and imprecise."
    }
  },
  {
    number: 36,
    question: "What is the collective term for practices used to prevent contamination and reduce the transmission of microorganisms during clinical procedures?",
    options: {
      A: "Aseptic technique",
      B: "Medical asepsis only",
      C: "A sterile procedure in every situation"
    },
    correctAnswer: "A",
    rationaleCorrect: "Aseptic technique is the set of practices used to protect key parts and sites from contamination and prevent microorganisms from being transferred during care. The exact level may be clean or sterile depending on the invasiveness of the procedure and the patient's infection risk.",
    rationalesIncorrect: {
      B: "Medical asepsis is the clean-technique component that reduces microbial numbers and spread, but the broader term aseptic technique also includes sterile practices when required.",
      C: "Not every clinical task requires a fully sterile procedure. Applying sterile technique unnecessarily can waste resources, while failing to use it for an invasive procedure can cause infection."
    }
  },
  {
    number: 37,
    question: "Which principle is essential for effective disinfection or sterilisation of reusable equipment?",
    options: {
      A: "Clean the item first and fully expose every required surface to the agent for the specified time",
      B: "Use a shorter contact time when visible soil remains",
      C: "Expose only the visibly dirty surfaces to the agent"
    },
    correctAnswer: "A",
    rationaleCorrect: "Organic material can shield microorganisms and inactivate some chemical agents, so thorough cleaning must precede disinfection or sterilisation. Every surface, hinge and lumen must then contact the selected agent under the required concentration, temperature and time specified for the device and process.",
    rationalesIncorrect: {
      B: "Shortening contact time reduces microbial killing and is particularly unsafe when soil remains. The item should be recleaned and the full validated cycle completed.",
      C: "Microorganisms may remain on surfaces that do not look dirty. All required surfaces must be processed, not only areas where contamination is visible."
    }
  },
  {
    number: 38,
    question: "What term describes the body's dynamic maintenance of a relatively stable internal environment despite continuous change?",
    options: {
      A: "Adaptation",
      B: "Static equilibrium",
      C: "Homeostasis"
    },
    correctAnswer: "C",
    rationaleCorrect: "Homeostasis is the continuous regulation of internal variables such as temperature, blood glucose, pH and fluid balance within ranges compatible with life. Feedback mechanisms detect deviations and activate responses that restore stability, so homeostasis is dynamic rather than completely unchanging.",
    rationalesIncorrect: {
      A: "Adaptation is adjustment to internal or external demands over time. It can support survival, but it is not the specific term for moment-to-moment regulation of the internal environment.",
      B: "The body is not in a fixed or static equilibrium. Physiological values fluctuate within controlled ranges as regulatory systems respond to changing demands."
    }
  },
  {
    number: 39,
    question: "Adjustments in fluid and electrolyte balance and hormone secretion are primarily directed toward maintaining:",
    options: {
      A: "Adaptation alone",
      B: "An unchanging external environment",
      C: "Homeostasis"
    },
    correctAnswer: "C",
    rationaleCorrect: "Hormonal and renal mechanisms continuously regulate water, electrolytes, osmolality and acid–base balance to keep the internal environment within safe limits. Examples include antidiuretic hormone controlling water retention and aldosterone influencing sodium and potassium balance.",
    rationalesIncorrect: {
      A: "Adaptation is a broader response to stress or environmental demands. The immediate physiologic purpose of these regulatory processes is internal homeostasis.",
      B: "The body does not control the external environment. It changes its internal processes in response to external and internal conditions."
    }
  },
  {
    number: 40,
    question: "Which measures are appropriate when repositioning a patient after stroke? I. Always apply an arm sling in bed II. Never allow any position on the affected side III. Follow the physiotherapist's individual positioning plan IV. Use pillows to support the trunk and limbs",
    options: {
      A: "I and II",
      B: "I and III",
      C: "III and IV"
    },
    correctAnswer: "C",
    rationaleCorrect: "Post-stroke positioning should follow the individual rehabilitation plan and use pillows or other supports to maintain alignment, protect the affected shoulder, reduce pressure and promote comfort. The nurse also checks skin, sensation, pain and limb placement during every turn.",
    rationalesIncorrect: {
      A: "A sling is not automatically worn in bed and can promote poor positioning if used incorrectly. Lying on the affected side may be appropriate for selected patients when the shoulder and limbs are carefully positioned.",
      B: "Following the therapist's plan is correct, but routine sling use in bed is not. Shoulder protection depends on proper support and handling rather than an automatic sling."
    }
  },
  {
    number: 41,
    question: "A nursing assistant is providing oral hygiene to a bedridden patient. Which action is most important for safety?",
    options: {
      A: "Rinse the mouth with cold water only",
      B: "Use a hard-bristled toothbrush",
      C: "Position the patient upright or on the side"
    },
    correctAnswer: "C",
    rationaleCorrect: "An upright position helps a conscious patient control oral fluids, while a side-lying position allows secretions to drain from the mouth when the patient has reduced consciousness or swallowing ability. Positioning, suction availability when indicated and use of small fluid volumes reduce the risk of aspiration during mouth care.",
    rationalesIncorrect: {
      A: "Cold water alone does not remove plaque effectively and may be uncomfortable. Oral care requires appropriate cleaning of the teeth, gums, tongue and mucosa with products suited to the patient's condition.",
      B: "A hard toothbrush can injure gums and oral mucosa, especially in frail patients or those at risk of bleeding. A soft toothbrush is generally preferred."
    }
  },
  {
    number: 42,
    question: "A nursing assistant is helping with a sterile procedure. Which action is consistent with maintaining the sterile field?",
    options: {
      A: "Handle only the outer border of the sterile drape as directed, because the border is considered contaminated",
      B: "Place non-sterile supplies directly on the sterile field",
      C: "Reach across the sterile field"
    },
    correctAnswer: "A",
    rationaleCorrect: "The outer approximately 2.5 cm or one inch of a sterile drape is considered contaminated and may be handled as directed without touching the central sterile area. The assistant must keep sterile items in view, above waist level and protected from moisture, and should report any suspected contamination immediately.",
    rationalesIncorrect: {
      B: "A non-sterile item contaminates the sterile field as soon as it contacts it. Only sterile supplies may be placed within the sterile area.",
      C: "Reaching over a sterile field can shed microorganisms or allow clothing and arms to cross the field. The person should move around the field instead."
    }
  },
  {
    number: 43,
    question: "A nursing assistant is changing a patient's bed linen. What is the best general method for preventing staff injury?",
    options: {
      A: "Keep the bed at its highest level after care",
      B: "Ask the patient to stand while all linen is changed",
      C: "Use proper body mechanics and available handling equipment"
    },
    correctAnswer: "C",
    rationaleCorrect: "Safe bed making includes raising the bed to a suitable working height, widening the base of support, avoiding twisting, working close to the load and using help or equipment when repositioning the patient. These measures reduce excessive spinal loading and musculoskeletal injury.",
    rationalesIncorrect: {
      A: "The bed may be raised temporarily to protect the worker's back, but it must be returned to the lowest safe position with brakes applied after care to reduce the patient's fall risk.",
      B: "Some mobile patients may sit in a chair while the bed is made, but asking every patient to stand is unsafe, especially when weakness, dizziness or postoperative restrictions are present."
    }
  },
  {
    number: 44,
    question: "When cleaning a clean surgical wound, in which direction should the nurse move each swab?",
    options: {
      A: "From the least contaminated area at the centre toward the surrounding skin",
      B: "Back and forth over the wound using the same swab",
      C: "From the surrounding skin toward the incision"
    },
    correctAnswer: "A",
    rationaleCorrect: "A clean incision is generally cleaned from the least contaminated area—the incision—outward toward more contaminated surrounding skin. A fresh swab is used for each stroke so organisms and debris are not carried back across the cleaned area; wound type and local protocol determine the exact technique.",
    rationalesIncorrect: {
      B: "Moving back and forth with the same swab redistributes microorganisms and debris over the wound. Each swab should make a single controlled pass before disposal.",
      C: "Cleaning from the surrounding skin toward a clean incision can drag organisms into the wound and increase contamination."
    }
  },
  {
    number: 45,
    question: "A nursing assistant is helping a patient walk for the first time after surgery. Which action best promotes safety?",
    options: {
      A: "Allow the patient to walk alone to encourage independence",
      B: "Encourage the patient to walk as quickly as possible",
      C: "Use a gait belt when indicated and follow the mobility assessment"
    },
    correctAnswer: "C",
    rationaleCorrect: "A gait belt gives the caregiver a secure point of contact when the patient's mobility assessment indicates that assistance is needed. Before ambulation, the team should check pain control, footwear, dizziness, attached devices and the prescribed level of assistance, and should allow the patient to sit or dangle before standing.",
    rationalesIncorrect: {
      A: "A patient walking for the first time after surgery may have weakness, orthostatic hypotension or medication effects. Leaving the patient unsupported creates a serious fall risk.",
      B: "Speed does not make ambulation safer. The patient should progress gradually at a pace that maintains balance, oxygenation and comfort."
    }
  },
  {
    number: 46,
    question: "Which pulse site is normally the most convenient for routine assessment in a stable adult with no contraindication?",
    options: {
      A: "Femoral artery",
      B: "Radial artery",
      C: "Carotid artery"
    },
    correctAnswer: "B",
    rationaleCorrect: "The radial pulse is superficial, easy to locate at the wrist and can be assessed without exposing the patient. The nurse evaluates rate, rhythm and strength and counts for a full minute when the rhythm is irregular.",
    rationalesIncorrect: {
      A: "The femoral pulse is a central pulse used in selected emergencies or vascular assessments. It requires greater exposure and is not the usual site for routine observations.",
      C: "The carotid pulse is valuable during emergency assessment when peripheral pulses are absent, but excessive or bilateral pressure can reduce cerebral blood flow. It is not the routine choice for a stable adult."
    }
  },
  {
    number: 47,
    question: "When taking an oral temperature with a reusable electronic thermometer, which infection-prevention measure is essential?",
    options: {
      A: "Place the probe in the ear",
      B: "Shake the electronic thermometer vigorously",
      C: "Apply a new disposable probe cover and reprocess the device as directed"
    },
    correctAnswer: "C",
    rationaleCorrect: "A new single-use probe cover creates a barrier between the oral mucosa and the reusable probe. The nurse performs hand hygiene, avoids contaminating the handle and cleans the device according to the manufacturer's instructions after use to prevent cross-transmission.",
    rationalesIncorrect: {
      A: "An oral probe is designed for the mouth and must not simply be inserted into the ear. Tympanic measurement requires the correct device and technique.",
      B: "Electronic thermometers do not require shaking. Vigorous handling can damage the device and does nothing to prevent infection."
    }
  },
  {
    number: 48,
    question: "A stable patient who is allowed unrestricted oral fluids has dark, concentrated urine. Which initial supportive action is most appropriate while the finding is reported and assessed?",
    options: {
      A: "Collect a specimen without first assessing the patient",
      B: "Administer a diuretic",
      C: "Encourage appropriate oral fluid intake"
    },
    correctAnswer: "C",
    rationaleCorrect: "Dark, concentrated urine may result from inadequate fluid intake, and encouraging fluids can help restore hydration when the patient is alert, can swallow safely and has no fluid restriction. The nurse should also review intake and output and assess for other causes such as bleeding, liver disease, medication effects or infection.",
    rationalesIncorrect: {
      A: "A urine specimen may be prescribed if infection or another disorder is suspected, but collecting one automatically does not address likely dehydration. Assessment should guide whether a specimen is needed.",
      B: "A diuretic increases urine and fluid loss and requires a prescription. Giving one to a possibly dehydrated patient could worsen hypovolaemia and electrolyte imbalance."
    }
  },
  {
    number: 49,
    question: "A patient suddenly develops shortness of breath. What is the best immediate action among the options?",
    options: {
      A: "Administer oxygen without assessment, a prescription or protocol",
      B: "Offer a glass of water",
      C: "Elevate the head of the bed, assess the patient and summon nursing help"
    },
    correctAnswer: "C",
    rationaleCorrect: "Sitting the patient upright promotes lung expansion and reduces pressure on the diaphragm while help is obtained. The nurse should rapidly assess airway, breathing, oxygen saturation and vital signs and provide oxygen or emergency treatment according to clinical findings and authorised protocols.",
    rationalesIncorrect: {
      A: "Oxygen may be urgently indicated, but it should be delivered by an authorised practitioner or emergency protocol at the appropriate concentration while the cause and response are assessed. The option omits essential assessment and escalation.",
      B: "Giving water does not treat respiratory distress and may increase aspiration risk if the patient is struggling to breathe."
    }
  },
  {
    number: 50,
    question: "Which intervention is most appropriate for reducing pressure-injury risk in a bedbound patient?",
    options: {
      A: "Massage reddened bony prominences each day",
      B: "Reposition the patient on an individualised schedule, commonly at least every two hours when clinically appropriate",
      C: "Apply talcum powder to all pressure areas"
    },
    correctAnswer: "B",
    rationaleCorrect: "Regular repositioning redistributes pressure and limits prolonged tissue ischaemia over bony prominences. Frequency should be individualised according to skin response, mobility, comfort, nutrition, perfusion and the support surface rather than treating two hours as an inflexible rule.",
    rationalesIncorrect: {
      A: "Massaging persistently red or damaged tissue can worsen capillary and deep-tissue injury. The pressure should be relieved and the skin assessed instead.",
      C: "Talcum powder does not remove mechanical pressure and can cake in skin folds or irritate the respiratory tract. Moisture management and pressure redistribution are required."
    }
  },
  {
    number: 51,
    question: "A patient is scheduled for surgery and has been instructed to remain NPO. What should the nursing assistant do?",
    options: {
      A: "Provide a light meal",
      B: "Allow sips of water unless the patient asks for more",
      C: "Withhold oral food and fluids for the prescribed fasting period"
    },
    correctAnswer: "C",
    rationaleCorrect: "NPO means nothing by mouth. The ordered fasting period must be followed to reduce the volume of gastric contents and aspiration risk during anaesthesia; the assistant should also report accidental intake and confirm whether essential medicines have separate instructions.",
    rationalesIncorrect: {
      A: "Even a light meal breaks fasting and can delay gastric emptying. It may cause cancellation or postponement of surgery and increase aspiration risk.",
      B: "Water is oral fluid and should not be offered unless the surgical or anaesthetic instructions specifically permit clear fluids up to a stated time."
    }
  },
  {
    number: 52,
    question: "A patient reports pain at a peripheral intravenous site, and the area is red and swollen. What should the nursing assistant do first?",
    options: {
      A: "Stop manipulating the site and notify the responsible nurse immediately",
      B: "Apply a warm compress without assessment",
      C: "Continue the infusion and reassess later"
    },
    correctAnswer: "A",
    rationaleCorrect: "Pain, redness and swelling may indicate infiltration, extravasation, phlebitis or infection. The assistant should stop using or manipulating the line and report immediately so a licensed nurse can assess the site, stop the infusion when indicated and initiate the correct treatment for the infused substance.",
    rationalesIncorrect: {
      B: "Warm or cold compresses are selected according to the complication and medication involved. Applying one before assessment may be inappropriate, especially in an extravasation injury.",
      C: "Continuing the infusion may increase tissue damage, pain or inflammation. The abnormal site requires prompt action rather than delayed review."
    }
  },
  {
    number: 53,
    question: "A patient with a leg cast reports itching beneath it. Which instruction is safest?",
    options: {
      A: "Insert a thin stick under the cast to scratch",
      B: "Do not insert objects; report persistent itching or other warning signs",
      C: "Pour lotion under the cast"
    },
    correctAnswer: "B",
    rationaleCorrect: "Objects placed under a cast can abrade numb or inaccessible skin and introduce infection. The patient should keep the cast dry and report persistent itching, burning, increasing pain, odour, drainage, numbness, swelling or colour change; cool air may be used only if permitted.",
    rationalesIncorrect: {
      A: "A stick can scratch or puncture the skin without the patient seeing the injury, and it may become trapped beneath the cast.",
      C: "Lotion can retain moisture, soften skin and damage cast material. Nothing should be poured under the cast unless specifically prescribed."
    }
  },
  {
    number: 54,
    question: "A febrile patient is shivering during the rising phase of fever. Which comfort measure is appropriate?",
    options: {
      A: "Apply ice packs until the shivering becomes stronger",
      B: "Direct a fan continuously at the patient",
      C: "Provide a light blanket during the chill, then remove excess covering when shivering stops"
    },
    correctAnswer: "C",
    rationaleCorrect: "During a chill, the hypothalamic set point has risen and the patient feels cold, so a light blanket can improve comfort. Excessive or prolonged covering should be removed once shivering stops because it can trap heat; the nurse should assess the cause of fever, hydration and the need for prescribed antipyretic treatment.",
    rationalesIncorrect: {
      A: "Ice can intensify vasoconstriction and shivering. Shivering raises metabolic heat production and oxygen demand and may make the patient more uncomfortable.",
      B: "A fan directed at a shivering patient increases discomfort and may provoke more shivering. Environmental cooling should be gentle and guided by the patient's phase of fever and tolerance."
    }
  },
  {
    number: 55,
    question: "A patient with a high fever is sweating profusely. Which action best promotes comfort and safety?",
    options: {
      A: "Add a heavy warm blanket",
      B: "Increase the room temperature",
      C: "Replace damp clothing and linen, encourage permitted fluids and use gentle tepid measures only if indicated"
    },
    correctAnswer: "C",
    rationaleCorrect: "Sweating during defervescence causes fluid loss and leaves clothing and linen wet, so the nurse should keep the patient dry, encourage appropriate fluids and maintain a comfortable environment. Gentle tepid measures may be used when clinically indicated and tolerated, but routine cold sponging is avoided because it can trigger shivering.",
    rationalesIncorrect: {
      A: "A heavy blanket traps heat and worsens discomfort when the patient is already sweating. It may also impede heat loss.",
      B: "Increasing room temperature reduces environmental heat loss and can make the patient more uncomfortable. A neutral, comfortable temperature is preferable."
    }
  },
  {
    number: 56,
    question: "A patient with a respiratory infection coughs without covering the mouth. What should the nursing assistant do?",
    options: {
      A: "Provide a tissue or mask, encourage cough etiquette and perform hand hygiene",
      B: "Move the patient to a private room without notifying the nurse",
      C: "Ignore the behaviour"
    },
    correctAnswer: "A",
    rationaleCorrect: "Respiratory hygiene includes covering coughs and sneezes with a tissue or elbow, disposing of tissues promptly, wearing a mask when appropriate and cleaning the hands. Calm education and readily available supplies reduce contamination of hands, surfaces and nearby people.",
    rationalesIncorrect: {
      B: "A private room may be required for a particular infection, but room placement is based on risk assessment and transmission-based precautions. The assistant should not relocate the patient independently.",
      C: "Ignoring uncovered coughing allows droplets and respiratory secretions to contaminate the environment and exposes other people unnecessarily."
    }
  },
  {
    number: 57,
    question: "A patient with an indwelling urinary catheter reports discomfort. What should be checked first?",
    options: {
      A: "Whether the tubing is kinked and the drainage bag is below bladder level without touching the floor",
      B: "Only the patient's total fluid intake",
      C: "The colour of the catheter tubing"
    },
    correctAnswer: "A",
    rationaleCorrect: "Dependent, unobstructed drainage prevents urine from backing up into the bladder and reduces traction and distension. The nurse should check tubing for kinks, securement and bag position, assess pain and urine characteristics, and report possible obstruction, bladder spasm or infection.",
    rationalesIncorrect: {
      B: "Fluid intake is relevant to urinary output, but it does not identify immediate mechanical problems such as obstruction, traction or backflow.",
      C: "The colour of the tubing itself is not clinically useful. The nurse assesses the urine within it and the function and position of the entire system."
    }
  },
  {
    number: 58,
    question: "A conscious patient with diabetes has a blood glucose level of 3.2 mmol/L and can swallow safely. What should be done first?",
    options: {
      A: "Administer insulin immediately",
      B: "Give the prescribed amount of fast-acting carbohydrate, such as a glucose drink",
      C: "Encourage the patient to sleep"
    },
    correctAnswer: "B",
    rationaleCorrect: "A glucose level of 3.2 mmol/L indicates hypoglycaemia. A conscious patient who can swallow should receive approximately 15–20 g of fast-acting carbohydrate according to protocol, have glucose rechecked after about 15 minutes and receive further treatment or a longer-acting snack as indicated.",
    rationalesIncorrect: {
      A: "Insulin lowers blood glucose and would worsen hypoglycaemia, possibly causing seizures, loss of consciousness or death.",
      C: "Sleep delays recognition and treatment while glucose may continue to fall. An unconscious or swallowing-impaired patient must not receive oral fluid and instead requires emergency treatment according to protocol."
    }
  },
  {
    number: 59,
    question: "A patient with suspected acute bacterial meningitis is admitted. Which additional precaution should be prioritised while the cause is evaluated?",
    options: {
      A: "Gloves during every interaction as the only precaution",
      B: "Droplet precautions in addition to standard precautions",
      C: "Alcohol hand rub as the only protective measure"
    },
    correctAnswer: "B",
    rationaleCorrect: "Suspected meningococcal or other transmissible bacterial meningitis requires droplet precautions in addition to standard precautions, commonly until effective antimicrobial therapy has been given for the period specified by policy. Appropriate placement and a medical mask for close contact reduce exposure to respiratory droplets.",
    rationalesIncorrect: {
      A: "Gloves are selected when contact with blood, body fluids or contaminated material is anticipated, but they do not protect the nose and mouth from infectious droplets and cannot replace hand hygiene.",
      C: "Hand hygiene is essential but is only one component of infection control. Droplet protection and appropriate patient placement are also required when bacterial meningitis is suspected."
    }
  },
  {
    number: 60,
    question: "A nursing assistant obtains a blood pressure of 180/110 mmHg in a patient who is not currently in distress. What is the most appropriate next action among the options?",
    options: {
      A: "Keep the patient resting, repeat the measurement correctly after a few minutes and report it promptly to the nurse",
      B: "Give oral fluids as treatment",
      C: "Rely on deep-breathing exercises and take no further action"
    },
    correctAnswer: "A",
    rationaleCorrect: "A very high reading should be confirmed using the correct cuff size, positioning and technique while the patient rests, then promptly communicated to the responsible nurse. Symptoms such as chest pain, neurologic change, severe headache or breathlessness require immediate escalation rather than waiting for a routine repeat.",
    rationalesIncorrect: {
      B: "Oral fluids do not treat severe hypertension and may be inappropriate in heart or kidney disease. Treatment decisions require clinical assessment and authorised medication.",
      C: "Relaxation may lower a transient stress response but cannot be assumed to correct a reading of 180/110 mmHg. Failure to report it could delay assessment of hypertensive urgency or emergency."
    }
  },
  {
    number: 61,
    question: "The nurse is preparing a patient with cirrhosis for an abdominal paracentesis. How should the patient usually be positioned?",
    options: {
      A: "Lying flat on the right side",
      B: "Lying flat on the left side",
      C: "Sitting upright or in high Fowler's position"
    },
    correctAnswer: "C",
    rationaleCorrect: "An upright sitting or high Fowler's position allows ascitic fluid to collect in the lower abdomen and facilitates access to the selected puncture site. Before the procedure, the patient is usually asked to empty the bladder, and baseline weight, abdominal girth and vital signs are recorded according to protocol.",
    rationalesIncorrect: {
      A: "Routine flat right-side positioning does not pool ascitic fluid in the lower abdomen as effectively and may make access and breathing less comfortable.",
      B: "Routine flat left-side positioning is not the usual position for paracentesis. A modified position may be ordered when a patient cannot sit, but this depends on the clinician and ultrasound findings."
    }
  },
  {
    number: 62,
    question: "Which action is essential before administering medication through a nasogastric tube?",
    options: {
      A: "Reconnect suction immediately after giving the drug",
      B: "Verify tube placement and patency according to policy",
      C: "Place the patient flat in a dorsal recumbent position"
    },
    correctAnswer: "B",
    rationaleCorrect: "The nurse must confirm that the tube is in the intended gastrointestinal location and is patent before giving medication. The patient is positioned upright, compatible medicines are prepared separately, the tube is flushed as prescribed and suction is held for the required period so the drug is not removed before absorption.",
    rationalesIncorrect: {
      A: "Immediate reconnection to suction can remove the medicine before it is absorbed. Suction should remain off or the tube clamped for the prescribed interval when clinically safe.",
      C: "A flat position increases reflux and aspiration risk. The head of the bed should generally be elevated unless a contraindication requires a different plan."
    }
  },
  {
    number: 63,
    question: "Which technique is appropriate when administering ear drops to a 3-year-old child?",
    options: {
      A: "Pull the pinna gently downward and backward",
      B: "Hyperextend the child's head",
      C: "Place the child's head in a chin-tuck position"
    },
    correctAnswer: "A",
    rationaleCorrect: "For an infant or young child around three years of age, pulling the pinna down and back helps straighten the shorter, more horizontal external auditory canal. The child is positioned with the affected ear upward, and the dropper tip must not touch the ear.",
    rationalesIncorrect: {
      B: "Hyperextension does not straighten the external auditory canal and can be uncomfortable or unsafe. The head only needs to be turned or tilted to expose the ear.",
      C: "Chin tuck is a swallowing strategy and is not the anatomical manoeuvre used for otic instillation."
    }
  },
  {
    number: 64,
    question: "Which statement best describes standard precautions?",
    options: {
      A: "Wear gloves and a mask continuously in every patient's room",
      B: "Wear gloves at all times and perform hand hygiene only between patients",
      C: "Use hand hygiene for every patient and select gloves or other PPE according to the expected exposure"
    },
    correctAnswer: "C",
    rationaleCorrect: "Standard precautions apply to all patients regardless of diagnosis. They combine hand hygiene with risk-based use of gloves, gown, mask and eye protection, respiratory hygiene, injection safety and correct handling of sharps, equipment, linen and the environment.",
    rationalesIncorrect: {
      A: "PPE is selected after assessing the likely exposure; it is not worn continuously without indication. Unnecessary PPE wastes resources and can promote incorrect practice.",
      B: "Gloves are not required for every contact and never replace hand hygiene. Hand hygiene is also needed at defined moments within the care of the same patient, including after glove removal."
    }
  },
  {
    number: 65,
    question: "Which age group has the greatest risk of serious injury from falls?",
    options: {
      A: "Older adults",
      B: "Children",
      C: "Middle-aged adults"
    },
    correctAnswer: "A",
    rationaleCorrect: "Older adults have a high risk of fall-related fractures, head injury, loss of independence and death because of frailty, osteoporosis, impaired balance, sensory changes, chronic illness and polypharmacy. Prevention requires individual assessment of mobility, medicines, cognition, continence, footwear and the environment.",
    rationalesIncorrect: {
      B: "Children fall frequently, but many falls produce less severe injury because of lower height, body mass and bone characteristics. Their risks still require age-appropriate prevention.",
      C: "Middle-aged adults can sustain serious falls, particularly at work or with illness, but the population-level risk of severe fall consequences is greatest in older adults."
    }
  },
  {
    number: 66,
    question: "Which is a common emotional consequence of prolonged immobility?",
    options: {
      A: "Dementia",
      B: "Delirium",
      C: "Depression"
    },
    correctAnswer: "C",
    rationaleCorrect: "Prolonged immobility can produce dependence, social isolation, boredom, loss of role and reduced control, all of which increase the risk of depressive symptoms. Nursing care should support activity within ability, social contact, meaningful goals, sleep and referral when persistent low mood or suicidal thinking is identified.",
    rationalesIncorrect: {
      A: "Dementia is a chronic syndrome of cognitive decline caused by underlying neurologic disease. Immobility alone does not directly create dementia, although reduced activity may worsen function in someone who already has it.",
      B: "Delirium is an acute fluctuating disturbance of attention and cognition usually triggered by illness, drugs, dehydration or environmental factors. Immobility and hospitalisation may contribute, but delirium is not primarily classified as an emotional consequence."
    }
  },
  {
    number: 67,
    question: "Changing soiled incontinence pads promptly and applying barrier cream to moisture-exposed skin are both measures that help prevent pressure injury. Which option is the exception to the list of harmful practices?",
    options: {
      A: "None of the above; both stated measures are appropriate",
      B: "Changing incontinence pads as soon as they are soiled",
      C: "Applying an appropriate skin barrier to moisture-prone areas"
    },
    correctAnswer: "A",
    rationaleCorrect: "Both prompt continence care and an appropriate moisture barrier protect the skin from prolonged urine or stool exposure and moisture-associated skin damage. Because options B and C are valid preventive measures, neither is an exception; pressure redistribution, nutrition and regular skin inspection are also required.",
    rationalesIncorrect: {
      B: "This is an appropriate measure, not an exception. Prompt pad changes reduce moisture, friction, irritation and microbial contamination.",
      C: "This is also appropriate when the product is used on areas exposed to moisture. Barrier cream does not replace repositioning, but it protects the epidermis from irritants and excessive moisture."
    }
  },
  {
    number: 68,
    question: "Which environmental factor may cause a person to suppress the urge to defecate?",
    options: {
      A: "Lack of privacy",
      B: "A poorly balanced diet",
      C: "An established bowel habit"
    },
    correctAnswer: "A",
    rationaleCorrect: "A person may consciously inhibit defecation when the toilet environment does not provide privacy, dignity, cleanliness or enough time. Repeated suppression allows more water to be absorbed from stool and can weaken the normal response to rectal filling, contributing to constipation.",
    rationalesIncorrect: {
      B: "Low fibre or inadequate fluid can contribute to hard stool and constipation, but it is not the environmental reason a person deliberately resists an immediate urge.",
      C: "A regular bowel habit generally supports elimination. The harmful habit is repeatedly ignoring the urge, not having an established routine."
    }
  },
  {
    number: 69,
    question: "Which perineal hygiene instruction should be emphasised to an older female patient to reduce urinary tract contamination?",
    options: {
      A: "Wipe from front to back",
      B: "Wipe from back to front",
      C: "Stand quickly after toileting"
    },
    correctAnswer: "A",
    rationaleCorrect: "Wiping from the urethral area toward the anus reduces transfer of faecal organisms such as E. coli to the urethral opening. Other helpful measures include regular toileting, adequate permitted fluids, avoiding unnecessary urinary catheters and reporting dysuria, frequency or fever.",
    rationalesIncorrect: {
      B: "Back-to-front wiping moves organisms from the anus toward the urethra and increases the chance of ascending urinary infection.",
      C: "Standing quickly can cause dizziness or a fall, especially in an older patient. It does not prevent urinary tract infection."
    }
  },
  {
    number: 70,
    question: "A bedbound patient needs assistance with meals. In which position should the patient be placed for feeding when not contraindicated?",
    options: {
      A: "Supine",
      B: "High Fowler's",
      C: "Reverse Trendelenburg with the head still nearly flat"
    },
    correctAnswer: "B",
    rationaleCorrect: "High Fowler's position places the patient as upright as possible, promoting swallowing and using gravity to reduce reflux and aspiration. The assistant should confirm alertness and swallowing ability, give small bites at a safe pace and keep the patient upright after the meal as directed.",
    rationalesIncorrect: {
      A: "Feeding a patient while supine allows food or fluid to pool in the pharynx and substantially increases aspiration risk.",
      C: "Tilting the whole bed may be used when hip flexion is contraindicated, but it is less effective than a truly upright position when the patient can tolerate high Fowler's."
    }
  },
  {
    number: 71,
    question: "Which statement about preparing and using a 0.5% chlorine decontamination solution is correct?",
    options: {
      A: "A fixed five-minute immersion is adequate for every instrument and situation",
      B: "Prepare the solution as directed and replace it at least every 24 hours, or sooner if visibly contaminated",
      C: "Use thin examination gloves to retrieve sharp instruments by hand"
    },
    correctAnswer: "B",
    rationaleCorrect: "Chlorine solution loses available chlorine over time and with exposure to organic matter, so it should be freshly prepared according to local infection-prevention guidance and replaced at least daily or sooner when contaminated. Concentration, contact time and device compatibility must follow the approved protocol because chlorine can corrode some instruments.",
    rationalesIncorrect: {
      A: "Required contact time varies by purpose, guideline and amount of contamination; five minutes cannot be assumed sufficient for every use. Instruments also require cleaning and the appropriate subsequent level of disinfection or sterilisation.",
      C: "Thin examination gloves do not provide adequate protection from sharps or concentrated chemicals. Heavy-duty utility gloves and mechanical handling methods are used, and instruments should not be retrieved blindly by hand."
    }
  },
  {
    number: 72,
    question: "Which patient is the most appropriate assignment for a nursing assistant?",
    options: {
      A: "A stable post-stroke patient awaiting rehabilitation who needs routine assistance with activities of daily living",
      B: "A patient returning from an emergency laparotomy and colon resection",
      C: "A terminally ill patient with uncontrolled severe pain"
    },
    correctAnswer: "A",
    rationaleCorrect: "Routine hygiene, mobility and other predictable activities for a stable patient may be delegated to a competent nursing assistant with clear instructions. The registered nurse retains responsibility for assessment, clinical judgement, discharge education, supervision and evaluation of the patient's response.",
    rationalesIncorrect: {
      B: "A patient immediately after major emergency surgery is at high risk of airway, bleeding, circulatory and abdominal complications and requires close assessment by a licensed nurse.",
      C: "Uncontrolled severe pain requires comprehensive assessment, medication decisions and evaluation of response, which cannot be delegated to an assistant."
    }
  },
  {
    number: 73,
    question: "Which instruction is appropriate while a chest tube is being removed?",
    options: {
      A: "Hold the breath for two full minutes",
      B: "Take a breath, exhale and bear down as instructed",
      C: "Breathe out normally without following the clinician's timing"
    },
    correctAnswer: "B",
    rationaleCorrect: "Bearing down after exhalation—the Valsalva manoeuvre—raises intrathoracic pressure during the moment of removal and helps prevent air from being drawn into the pleural space. The exact breathing instruction may vary by protocol, so the patient should practise and follow the clinician's timed command.",
    rationalesIncorrect: {
      A: "A two-minute breath hold is unrealistic, unsafe and unnecessary. The manoeuvre is performed only during the brief period of tube withdrawal and dressing application.",
      C: "Uncoordinated normal exhalation may not maintain sufficient positive intrathoracic pressure throughout removal. The patient should follow the specific timed instruction."
    }
  },
  {
    number: 74,
    question: "Which task is least appropriate for a nursing assistant?",
    options: {
      A: "Assessing a patient with emphysema who reports increasing difficulty breathing",
      B: "Accompanying a discharged, stable patient to the transport area",
      C: "Measuring and reporting a patient's temperature"
    },
    correctAnswer: "A",
    rationaleCorrect: "Increasing breathlessness requires respiratory assessment, clinical judgement, possible oxygen titration and prompt escalation by a licensed nurse. An assistant should report the complaint immediately and may obtain observations if directed, but must not independently assess or decide the treatment.",
    rationalesIncorrect: {
      B: "Escorting a stable discharged patient is a routine supportive activity that may be assigned after the nurse confirms discharge readiness and provides instructions.",
      C: "Measuring temperature using an established technique and reporting the result is a predictable task commonly assigned to a trained assistant. Interpretation remains the nurse's responsibility."
    }
  },
  {
    number: 75,
    question: "A patient has pneumonia. Which finding provides the best objective evidence that oxygenation is currently adequate?",
    options: {
      A: "The patient is alert and oriented",
      B: "The patient can speak",
      C: "Peripheral oxygen saturation is 97% with the patient's oxygen therapy documented"
    },
    correctAnswer: "C",
    rationaleCorrect: "An SpO₂ of 97% is an objective, quantitative indication of adequate arterial oxygen saturation for most patients when the waveform, perfusion and oxygen-delivery conditions are reliable. It must be interpreted with respiratory rate, work of breathing, mental state and the patient's prescribed target range.",
    rationalesIncorrect: {
      A: "Normal orientation is reassuring, but early hypoxaemia can occur before obvious confusion, and baseline cognition may vary. It is not as direct a measure as oxygen saturation.",
      B: "A patient may be able to speak while still hypoxaemic or working hard to breathe. Sentence length is useful in assessment but does not quantify oxygenation."
    }
  },
  {
    number: 76,
    question: "How should the nurse reduce interference from a nasogastric tube connected to suction while auscultating bowel sounds?",
    options: {
      A: "Irrigate the tube routinely with 30 mL saline before listening",
      B: "Pause or clamp the suction briefly, if safe, while listening",
      C: "Inject air into the tube and listen for a swishing sound"
    },
    correctAnswer: "B",
    rationaleCorrect: "Suction equipment can produce sounds that are transmitted over the abdomen and mistaken for bowel activity. Briefly pausing or clamping suction according to policy allows the nurse to listen systematically in all quadrants, after which suction is promptly restored.",
    rationalesIncorrect: {
      A: "Routine irrigation is not needed merely to assess bowel sounds and may be contraindicated or alter fluid balance. Tube flushing follows the prescription and device-management protocol.",
      C: "The air-bolus or ‘whoosh’ test does not assess bowel sounds and is unreliable for confirming tube position. Injected-air sounds can be heard even when a tube is misplaced."
    }
  },
  {
    number: 77,
    question: "A conscious adult in the dining room suddenly grasps the throat and cannot speak or cough. What should the nurse do after confirming severe airway obstruction?",
    options: {
      A: "Give repeated blind slaps while the person remains upright",
      B: "Begin chest compressions while the person is still conscious",
      C: "Call for help and perform abdominal thrusts according to the choking protocol"
    },
    correctAnswer: "C",
    rationaleCorrect: "Inability to speak, breathe or cough effectively indicates severe choking. For a conscious non-pregnant adult, the rescuer activates help and gives the recommended sequence of back blows and abdominal thrusts according to the local resuscitation guideline until the object is expelled or the person becomes unresponsive.",
    rationalesIncorrect: {
      A: "Back blows must be delivered using the recognised technique and sequence, not as uncontrolled blind slaps. The airway response is reassessed after each set.",
      B: "Chest compressions are started when the person becomes unresponsive. While conscious, abdominal thrusts are normally used; chest thrusts replace them for late pregnancy or when the abdomen cannot be encircled."
    }
  },
  {
    number: 78,
    question: "When transferring a post-stroke patient from bed to wheelchair, where should the wheelchair generally be placed?",
    options: {
      A: "At the head of the bed, facing away from the patient",
      B: "Close to the patient's stronger side at an appropriate angle",
      C: "On the weaker side regardless of the rehabilitation plan"
    },
    correctAnswer: "B",
    rationaleCorrect: "Placing the wheelchair close to the stronger side allows the patient to lead and bear weight with the more functional leg and arm. The chair is locked, footplates moved away, footwear secured and the level of assistance and transfer aid follow the individual mobility assessment.",
    rationalesIncorrect: {
      A: "A wheelchair at the head of the bed is difficult to reach during the pivot and increases the distance and turning required.",
      C: "Routine placement on the weak side reduces the patient's ability to assist and may increase falls. A therapist may prescribe a different method for training, but it should not be assumed."
    }
  },
  {
    number: 79,
    question: "Which definition best describes asepsis?",
    options: {
      A: "The presence of a pathogenic infection",
      B: "A state free from disease-causing microorganisms",
      C: "The complete absence of every microorganism in all circumstances"
    },
    correctAnswer: "B",
    rationaleCorrect: "Asepsis refers to freedom from pathogenic microorganisms and to practices that prevent contamination. Medical asepsis reduces the number and spread of organisms, while surgical asepsis aims to exclude all microorganisms from a sterile field.",
    rationalesIncorrect: {
      A: "The presence and multiplication of pathogens with tissue response describes infection, which is the opposite of asepsis.",
      C: "Complete destruction or removal of all microbial life, including spores, describes sterility. General asepsis does not mean that every environment is absolutely microorganism-free."
    }
  },
  {
    number: 80,
    question: "Which list contains the six links in the chain of infection?",
    options: {
      A: "Infectious agent, reservoir, portal of exit, mode of transmission, portal of entry and susceptible host",
      B: "Opportunism, weakness, immunity and colonisation",
      C: "Active natural, active artificial, passive natural and passive artificial immunity"
    },
    correctAnswer: "A",
    rationaleCorrect: "Infection occurs when an infectious agent survives in a reservoir, leaves through a portal of exit, travels by a mode of transmission, enters through a portal of entry and reaches a susceptible host. Nursing prevention works by breaking one or more links—for example, hand hygiene interrupts transmission and vaccination reduces host susceptibility.",
    rationalesIncorrect: {
      B: "These terms relate to host–microorganism interactions but do not form the recognised sequence of links required for transmission.",
      C: "These are categories of acquired immunity. They describe how protection develops rather than the chain by which an infection spreads."
    }
  },
  {
    number: 81,
    question: "What may result when a person repeatedly ignores the urge to defecate?",
    options: {
      A: "Constipation",
      B: "Diarrhoea",
      C: "Urinary incontinence"
    },
    correctAnswer: "A",
    rationaleCorrect: "Repeatedly suppressing defecation allows the colon to absorb more water from retained stool, making it harder and more difficult to pass. Over time, the rectum may become less responsive to distension, weakening the normal defecation reflex and contributing to chronic constipation.",
    rationalesIncorrect: {
      B: "Diarrhoea is frequent passage of loose or watery stool and is commonly caused by infection, inflammation, medicines or malabsorption. Ignoring the urge more often promotes retention than diarrhoea.",
      C: "Urinary incontinence is involuntary loss of urine and is not the direct gastrointestinal consequence of suppressing the urge to defecate."
    }
  },
  {
    number: 82,
    question: "Which is a common musculoskeletal complication of prolonged immobility?",
    options: {
      A: "Constipation",
      B: "Joint contractures",
      C: "Diarrhoea"
    },
    correctAnswer: "B",
    rationaleCorrect: "When joints remain in one position, muscles and connective tissues shorten and lose flexibility, producing contractures and restricted movement. Correct positioning, active or passive range-of-motion exercises and early mobilisation help preserve joint function; immobility can also cause bone mineral loss.",
    rationalesIncorrect: {
      A: "Constipation is a gastrointestinal complication of immobility caused partly by reduced bowel motility, reduced activity and sometimes inadequate fluids or fibre. It is not a musculoskeletal complication.",
      C: "Diarrhoea is not a typical musculoskeletal effect of immobility. It usually reflects gastrointestinal infection, inflammation, medication effects or other digestive disorders."
    }
  },
  {
    number: 83,
    question: "Which task should be performed by a licensed nurse or appropriately trained foot-care professional rather than routinely delegated to a nursing assistant?",
    options: {
      A: "Helping a stable preoperative patient bathe",
      B: "Walking a low-fall-risk patient with a prescribed walker",
      C: "Trimming the toenails of a patient with diabetic neuropathy"
    },
    correctAnswer: "C",
    rationaleCorrect: "Diabetic neuropathy reduces protective sensation, and vascular disease may impair healing, so even a small cut during nail care can become infected or ulcerated. The feet require skilled assessment, careful nail care under local policy and referral for abnormalities; an assistant should not perform high-risk nail trimming independently.",
    rationalesIncorrect: {
      A: "Bathing is a routine activity of daily living that may be delegated when the patient's condition is stable and the assistant is told what observations or precautions to report.",
      B: "Assisting a stable, low-risk patient with an already prescribed mobility aid may be delegated after the nurse assesses mobility and specifies the required level of help."
    }
  },
  {
    number: 84,
    question: "A burn patient's expected outcome is absence of local or systemic infection. Which finding best supports this outcome among the options?",
    options: {
      A: "Cloudy, foul-smelling urine",
      B: "White blood cell count of 14,000/mm³",
      C: "No clinically significant pathogenic growth from the wound, with no local signs of infection"
    },
    correctAnswer: "C",
    rationaleCorrect: "Absence of clinically significant pathogenic growth together with no increasing pain, erythema, purulent drainage, malodour, fever or deterioration supports the outcome of no wound infection. Burn wounds can be colonised without invasion, so culture results must always be interpreted with the patient's clinical findings.",
    rationalesIncorrect: {
      A: "Cloudy, foul-smelling urine suggests a possible urinary problem or infection and does not support absence of systemic infection. It requires assessment and, when indicated, a correctly collected specimen.",
      B: "A white blood cell count of 14,000/mm³ is elevated in many adults and may indicate infection, inflammation or stress. It does not by itself support the stated outcome."
    }
  },
  {
    number: 85,
    question: "Which cardiac rhythm change is especially associated with vagal stimulation during tracheal suctioning?",
    options: {
      A: "Tachycardia",
      B: "Bradycardia",
      C: "Ventricular ectopic beats only"
    },
    correctAnswer: "B",
    rationaleCorrect: "Passing a suction catheter can stimulate the vagus nerve, slowing sinoatrial-node activity and producing bradycardia. Hypoxaemia during prolonged suctioning can also provoke dysrhythmias, so each pass is brief, oxygenation is monitored and suctioning stops if significant bradycardia or distress occurs.",
    rationalesIncorrect: {
      A: "Tachycardia may occur with anxiety, hypoxaemia or sympathetic stimulation, but the rhythm classically linked to direct vagal stimulation is bradycardia.",
      C: "Ventricular ectopic beats may occur when hypoxaemia develops, but they are not the most characteristic response to vagal stimulation and are not the only possible rhythm change."
    }
  },
  {
    number: 86,
    question: "Which intervention is most appropriate for a patient experiencing pruritus related to dry skin?",
    options: {
      A: "Apply drying powder over the entire skin",
      B: "Pour baby oil into the bath water",
      C: "Use short lukewarm showers and apply a fragrance-free emollient afterward"
    },
    correctAnswer: "C",
    rationaleCorrect: "Lukewarm rather than hot water reduces removal of natural skin oils, and a fragrance-free emollient applied soon after washing traps moisture in the skin barrier. The nurse should also assess for rash, allergy, liver or kidney disease, medicines and other causes when itching is persistent or generalised.",
    rationalesIncorrect: {
      A: "Powder can further dry the skin, cake in folds and become airborne. It does not restore the impaired skin barrier that commonly contributes to pruritus.",
      B: "Oil poured into bath water can make the tub and skin dangerously slippery and may not moisturise evenly. A measured emollient product applied directly after bathing is safer and more effective."
    }
  },
  {
    number: 87,
    question: "Which nursing intervention best improves tissue perfusion and reduces skin injury in an immobile patient?",
    options: {
      A: "Assess the skin once daily without changing the patient's position",
      B: "Change soiled pads but leave pressure areas continuously weight-bearing",
      C: "Perform prescribed range-of-motion exercises and reposition the patient regularly"
    },
    correctAnswer: "C",
    rationaleCorrect: "Repositioning unloads compressed capillaries and restores blood flow to pressure-exposed tissue, while range-of-motion exercises support circulation and preserve mobility. The plan also includes a suitable support surface, heel off-loading, moisture control, nutrition and frequent skin reassessment.",
    rationalesIncorrect: {
      A: "Skin assessment detects early damage but does not remove the pressure causing tissue ischaemia. Inspection must lead to preventive action.",
      B: "Prompt continence care protects against moisture damage, but pressure injury can still develop if sustained pressure and shear are not relieved."
    }
  },
  {
    number: 88,
    question: "A 2-year-old child has been bitten by the family dog. What should the mother do first?",
    options: {
      A: "Wait for a routine appointment before cleaning the wound",
      B: "Immediately wash and flush the wound thoroughly with soap and running water, then seek urgent assessment",
      C: "Cover the unwashed wound tightly and observe it at home"
    },
    correctAnswer: "B",
    rationaleCorrect: "Immediate, thorough washing and flushing—ideally for about 15 minutes—physically removes saliva, bacteria and rabies virus from the wound and is a critical first-aid action. The child still requires urgent professional assessment of wound care, tetanus protection, antibiotic need, the dog's status and rabies post-exposure prophylaxis.",
    rationalesIncorrect: {
      A: "Delaying cleansing allows contaminants to remain in the tissue and delays time-sensitive assessment for rabies prevention. The wound should be washed immediately.",
      C: "Tightly covering an unwashed bite traps contamination and does not address deep injury or rabies risk. Home observation alone is unsafe."
    }
  },
  {
    number: 89,
    question: "Which action should the nurse avoid when instilling ear drops in an adult?",
    options: {
      A: "Pulling the pinna upward and backward",
      B: "Touching the dropper tip to the ear canal",
      C: "Positioning the patient sitting with the head tilted and the affected ear upward"
    },
    correctAnswer: "B",
    rationaleCorrect: "The dropper tip must remain sterile or clean according to the product and should not touch the canal, pinna, fingers or other surfaces. Contact can contaminate the bottle and transfer organisms during this and future administrations.",
    rationalesIncorrect: {
      A: "Upward and backward traction is the correct method for straightening an adult's external auditory canal.",
      C: "A seated patient with the head tilted can keep the affected ear upward for instillation. Side-lying is another appropriate position, depending on comfort and safety."
    }
  },
  {
    number: 90,
    question: "A hospital has noted an increase in healthcare-associated infections. Which routine measure should receive immediate priority?",
    options: {
      A: "Wear gloves for every contact, even when not indicated",
      B: "Give prophylactic broad-spectrum antibiotics to all patients",
      C: "Improve adherence to correct hand hygiene"
    },
    correctAnswer: "C",
    rationaleCorrect: "Hand hygiene is the central routine measure for interrupting transmission of organisms between patients, staff, equipment and surfaces. Improvement should address access to supplies, the recognised moments for hand hygiene, technique, observation, feedback and the use of soap and water when required.",
    rationalesIncorrect: {
      A: "Gloves are used when exposure is anticipated, but unnecessary glove use can spread contamination when gloves are not changed. Gloves never replace hand hygiene.",
      B: "Routine broad-spectrum prophylaxis promotes antimicrobial resistance, adverse effects and C. difficile infection. Antibiotics require a defined clinical indication and stewardship oversight."
    }
  },
  {
    number: 91,
    question: "Standard precautions should be used when providing care for:",
    options: {
      A: "All patients regardless of diagnosis",
      B: "Only patients with a history of infectious disease",
      C: "Only patients who are immunocompromised"
    },
    correctAnswer: "A",
    rationaleCorrect: "Standard precautions are the minimum infection-prevention practices used for every patient in every care setting, regardless of suspected or confirmed infection. They protect staff and patients from recognised and unrecognised sources through hand hygiene, risk-based PPE, respiratory hygiene, injection and sharps safety, and correct equipment and environmental care.",
    rationalesIncorrect: {
      B: "A patient can carry or transmit an organism without a known history or current diagnosis. Restricting precautions to documented infection would miss asymptomatic and undiagnosed sources.",
      C: "Immunocompromised patients require careful infection prevention and may need additional protective measures, but standard precautions are not limited to them."
    }
  },
  {
    number: 92,
    question: "Which instruction about a 24-hour urine collection is correct?",
    options: {
      A: "Use any sterilised household container",
      B: "Empty the bladder at the end of the collection period and add that urine to the collection",
      C: "Save the first urine passed at the starting time"
    },
    correctAnswer: "B",
    rationaleCorrect: "At the starting time, the patient empties the bladder and discards that urine; all urine passed during the next 24 hours is collected. At the exact ending time, the patient voids once more and adds this final specimen, ensuring that urine produced throughout the full measured period is included.",
    rationalesIncorrect: {
      A: "The laboratory supplies an approved container that may contain a preservative and may require refrigeration. A household container can contaminate the sample or alter the analyte.",
      C: "The first urine is discarded because it was stored in the bladder before the timed period began. Saving it would make the collection longer than 24 hours and distort the result."
    }
  },
  {
    number: 93,
    question: "The nurse is caring for a patient with Clostridioides difficile infection. Which observation best indicates improvement among the options?",
    options: {
      A: "Persistent malaise",
      B: "Moist oral mucous membranes",
      C: "Continued anorexia"
    },
    correctAnswer: "B",
    rationaleCorrect: "Frequent watery diarrhoea causes fluid loss, and moist mucous membranes suggest improved or adequate hydration. A fuller assessment would also look for reduced stool frequency, improving consistency, less abdominal pain, normalising temperature, stable renal function and adequate urine output.",
    rationalesIncorrect: {
      A: "Malaise is a continuing feeling of illness or weakness and does not indicate recovery from the infection.",
      C: "Persistent loss of appetite may reflect ongoing gastrointestinal symptoms or systemic illness and can delay nutritional recovery."
    }
  },
  {
    number: 94,
    question: "Which instruction should be included when teaching a patient who is at high risk of skin cancer?",
    options: {
      A: "Every mole must be removed and biopsied",
      B: "Every high-risk person must see a doctor at exactly six-month intervals",
      C: "Use broad-spectrum sunscreen when outdoors and combine it with other sun-protection measures"
    },
    correctAnswer: "C",
    rationaleCorrect: "Broad-spectrum sunscreen with an appropriate sun-protection factor reduces ultraviolet exposure and should be applied generously and reapplied as directed. It works best with shade, protective clothing, a wide-brimmed hat, avoidance of tanning beds and regular examination for new or changing lesions.",
    rationalesIncorrect: {
      A: "Most moles are benign and do not require removal. Lesions with concerning asymmetry, borders, colour, diameter, evolution or other suspicious changes need professional assessment and biopsy when indicated.",
      B: "Clinical review frequency depends on personal history, lesion findings and clinician assessment. A fixed six-month interval is not universal for every person at increased risk."
    }
  },
  {
    number: 95,
    question: "Which meal best supports the healing of a pressure injury?",
    options: {
      A: "Baked chicken breast, broccoli, a whole-wheat roll and an orange",
      B: "Vegetable soup, crackers and tea",
      C: "Tossed salad, milk and caramel cake"
    },
    correctAnswer: "A",
    rationaleCorrect: "Chicken provides high-quality protein for collagen formation, immune function and tissue repair; broccoli and orange provide vitamin C and other micronutrients; and the roll supplies energy so protein can be used for healing. The total plan must also provide adequate calories, fluids and any identified micronutrient needs.",
    rationalesIncorrect: {
      B: "This meal is likely to be low in protein and total energy for a patient with increased wound-healing needs. Tea taken with food can also reduce absorption of non-haem iron.",
      C: "Milk supplies some protein, but the overall meal contains less high-quality protein and nutrient density than option A. Cake mainly adds sugar and fat and should not replace protein-rich foods."
    }
  },
  {
    number: 96,
    question: "Which supportive action is most appropriate for a conscious patient with a temperature of 39.5°C who can swallow safely and has no fluid restriction?",
    options: {
      A: "Encourage water and other appropriate oral fluids",
      B: "Open nearby windows regardless of weather, security or infection-control conditions",
      C: "Use both options automatically"
    },
    correctAnswer: "A",
    rationaleCorrect: "Fever increases insensible fluid loss and can cause dehydration, so appropriate oral fluids support circulating volume and comfort when swallowing is safe. The nurse must also reassess vital signs, identify the cause, remove excessive covering, use prescribed antipyretics and escalate concerning symptoms or deterioration.",
    rationalesIncorrect: {
      B: "Opening a window is not a controlled or universal treatment for fever and may create drafts, environmental hazards or infection-control problems. Room temperature should be adjusted safely.",
      C: "‘All options’ cannot be correct because opening windows automatically is not an appropriate intervention in every setting. Fever care must be individualised rather than applying unsafe environmental measures."
    }
  },
  {
    number: 97,
    question: "A patient who has undergone thoracic surgery is taught arm and shoulder exercises. What is their primary purpose?",
    options: {
      A: "Provide psychological stress relief",
      B: "Prevent oedema of the scapula",
      C: "Restore and maintain shoulder movement"
    },
    correctAnswer: "C",
    rationaleCorrect: "Pain and protective posture after thoracic surgery can lead to shoulder stiffness, muscle shortening and reduced function. Prescribed arm and shoulder exercises restore range of motion, reduce the risk of contracture or adhesive capsulitis and support posture and independence in daily activity.",
    rationalesIncorrect: {
      A: "Exercise may improve confidence and emotional well-being, but psychological stress relief is a secondary benefit rather than the primary rehabilitation goal.",
      B: "Scapular oedema is not the main complication targeted by these exercises. The central problem is loss of shoulder mobility and function."
    }
  },
  {
    number: 98,
    question: "Which personal protective equipment is most appropriate among the options when suctioning a patient with a tracheostomy?",
    options: {
      A: "Gown, goggles and gloves",
      B: "Gloves only",
      C: "Gown only"
    },
    correctAnswer: "A",
    rationaleCorrect: "Tracheostomy suctioning may expose the nurse's hands, clothing and eyes to respiratory secretions and splashes, making gloves, gown and eye protection the most complete option listed. A mask, face shield or respirator may also be required according to the infection, aerosol risk and local policy; hand hygiene remains essential.",
    rationalesIncorrect: {
      B: "Gloves protect only the hands. They do not protect the eyes, face or clothing from secretions expelled during coughing or suctioning.",
      C: "A gown protects clothing but leaves the hands and eyes exposed. PPE must match all reasonably anticipated routes of exposure."
    }
  },
  {
    number: 99,
    question: "A nasogastric tube has been inserted for enteral feeding. Which bedside finding best supports gastric placement among the options?",
    options: {
      A: "Green aspirate with a pH of 3",
      B: "Tan-coloured mucus",
      C: "A swishing sound after air is injected"
    },
    correctAnswer: "A",
    rationaleCorrect: "Aspirate with a pH of 3 is strongly acidic and supports gastric placement. However, initial placement of a newly inserted feeding tube should be confirmed by the approved reference method—commonly radiography—before first use, and bedside pH findings must be interpreted according to policy because feeds and acid-suppressing medicines can raise gastric pH.",
    rationalesIncorrect: {
      B: "Colour alone is unreliable because gastric, intestinal and respiratory secretions can overlap in appearance. Tan mucus cannot confirm gastric location.",
      C: "The air-auscultation or ‘whoosh’ test is unreliable because transmitted sounds may be heard even when the tube is in the oesophagus or respiratory tract. It should not be used to confirm placement."
    }
  },
  {
    number: 100,
    question: "Which action is most appropriate for reducing aspiration risk during nasogastric enteral feeding?",
    options: {
      A: "Lay the patient flat during the feeding",
      B: "Elevate the head of the bed at least 30–45 degrees unless contraindicated",
      C: "Increase the feeding rate"
    },
    correctAnswer: "B",
    rationaleCorrect: "Head-of-bed elevation uses gravity to reduce gastro-oesophageal reflux and aspiration of gastric contents. The nurse also verifies tube placement, monitors tolerance, delivers the feed at the prescribed rate and keeps the patient elevated during feeding and for the period specified by protocol afterward.",
    rationalesIncorrect: {
      A: "A flat supine position increases reflux and aspiration risk, especially when consciousness, swallowing or gastric emptying is impaired.",
      C: "Increasing the rate can cause gastric distension, nausea, vomiting and reflux. The prescribed rate should be changed only after clinical assessment and an authorised plan."
    }
  }
];

// Retain browser compatibility while allowing automated Node.js validation.
if (typeof module !== "undefined" && module.exports) {
  module.exports = questions;
}
