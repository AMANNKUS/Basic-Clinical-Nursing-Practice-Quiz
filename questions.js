const questions = [
  // Question 1
{
  question: "A school-aged child is brought to the clinic because he frequently complains of a ringing or buzzing sound in his ears, especially after returning from social events. Which area should the nurse explore first during assessment?",
  options: {
    A: "Frequent exposure to loud music.",
    B: "Family history of hearing impairment.",
    C: "Previous episodes of childhood ear infection."
  },
  correctAnswer: "A",
  rationaleCorrect: "Buzzing or ringing in the ears is commonly associated with tinnitus. In children and adolescents, frequent exposure to loud sounds, such as loud music through headphones or speakers, can contribute to tinnitus and possible hearing damage.",
  rationalesIncorrect: {
    B: "Family history may be relevant when assessing hearing problems, but it is not the first likely cause of sudden buzzing in the ears after social events.",
    C: "Previous ear infections can affect hearing, but buzzing in the ears is more directly linked with tinnitus, especially when there is noise exposure."
  }
},

// Question 2
{
  question: "A teenage girl attends a clinic to request family planning services. Later, her parents ask the nurse to disclose why their daughter came to the clinic. The nurse refuses to reveal the information. Which ethical principle is the nurse applying?",
  options: {
    A: "Confidentiality.",
    B: "Veracity.",
    C: "Consent."
  },
  correctAnswer: "A",
  rationaleCorrect: "Confidentiality means protecting a client’s private health information from unauthorized disclosure. The nurse is right not to disclose the girl’s reason for attending the clinic without her permission, unless there is a legal or safety reason to do so.",
  rationalesIncorrect: {
    B: "Veracity means telling the truth. Although nurses must be truthful, the main issue here is protecting private health information.",
    C: "Consent means giving permission for care or disclosure. The issue here is not whether treatment was accepted, but whether private information should be shared."
  }
},

// Question 3
{
  question: "A pregnant adolescent at 36 weeks gestation arrives at the maternity unit with lower abdominal pain. The midwife wants to confirm whether she is truly in labour. Which finding would best indicate true labour?",
  options: {
    A: "Regular painful uterine contractions with progressive change.",
    B: "Increased frequency of passing urine.",
    C: "Progressive cervical effacement."
  },
  correctAnswer: "C",
  rationaleCorrect: "A positive sign of true labour is progressive cervical change, including effacement and dilatation. Cervical effacement confirms that labour is progressing.",
  rationalesIncorrect: {
    A: "Regular painful uterine contractions may occur in labour, but contractions alone are less reliable unless they are accompanied by clear cervical change.",
    B: "Increased frequency of passing urine may occur when the presenting part descends, but it does not confirm true labour."
  }
},

// Question 4
{
  question: "A 16-year-old girl who has experienced sexual abuse is brought to the health facility for care. Which actions would help the nurse gain her trust and encourage her to speak freely?",
  options: {
    A: "I and II.",
    B: "I and III.",
    C: "II and III."
  },
  correctAnswer: "A",
  rationaleCorrect: "Starting with a general, non-threatening conversation helps the client feel safe and less pressured. Ensuring privacy also promotes trust, dignity, and confidentiality, which are essential when caring for survivors of sexual abuse.",
  rationalesIncorrect: {
    B: "Beginning with a general conversation is appropriate, but asking direct questions about the abuse immediately may frighten or silence the client.",
    C: "Privacy is important, but direct questioning at the beginning may make the client uncomfortable and reduce cooperation."
  }
},

// Question 5
{
  question: "A young woman with abdominal distension is being prepared for nasogastric tube insertion. During the procedure, which instruction should the nurse give to help the tube pass more easily?",
  options: {
    A: "“Swallow when I ask you to.”",
    B: "“Breathe out forcefully.”",
    C: "“Cough repeatedly.”"
  },
  correctAnswer: "A",
  rationaleCorrect: "Swallowing helps close the epiglottis and guides the nasogastric tube into the oesophagus instead of the airway. It also helps the tube advance more smoothly.",
  rationalesIncorrect: {
    B: "Breathing out forcefully does not guide the tube into the oesophagus and may not help the insertion.",
    C: "Coughing may indicate that the tube is entering the airway. If this happens, the nurse should pause or withdraw the tube."
  }
},

// Question 6
{
  question: "A young woman who frequently bites her fingernails reports swelling and pain around one fingernail. The nurse observes redness and a fluctuant swelling near the nail fold. What condition is most likely present?",
  options: {
    A: "Onychomycosis.",
    B: "Paronychia.",
    C: "Herpetic whitlow."
  },
  correctAnswer: "B",
  rationaleCorrect: "Paronychia is an infection of the tissue around the nail fold. It commonly occurs after nail biting, trauma, or hangnails and presents with redness, pain, swelling, and sometimes pus formation.",
  rationalesIncorrect: {
    A: "Onychomycosis is a fungal nail infection that usually causes thickened, discoloured, brittle nails rather than acute painful swelling around the nail fold.",
    C: "Herpetic whitlow is caused by herpes virus and usually presents with painful grouped vesicles rather than a fluctuant pus-filled swelling."
  }
},

// Question 7
{
  question: "A client presents with tenderness, redness, and swelling around the base of the fingernail after pulling a hangnail. Joint movement is normal and sensation is intact. Which diagnosis should the nurse suspect?",
  options: {
    A: "Herpetic whitlow.",
    B: "Paronychia.",
    C: "Onychomycosis."
  },
  correctAnswer: "B",
  rationaleCorrect: "The history of a hangnail and the presence of painful swelling around the nail fold strongly suggest paronychia. It is commonly caused by bacterial entry through broken skin around the nail.",
  rationalesIncorrect: {
    A: "Herpetic whitlow usually causes painful vesicular lesions and is viral in origin.",
    C: "Onychomycosis affects the nail plate itself and is usually chronic, not an acute painful infection around the nail fold."
  }
},

// Question 8
{
  question: "A 2-week-old baby is brought to the clinic with repeated projectile vomiting shortly after feeding and constipation. While waiting for the doctor, what should the nurse do first?",
  options: {
    A: "Keep the baby nil by mouth.",
    B: "Encourage the mother to breastfeed more frequently.",
    C: "Start a large volume of intravenous fluid immediately."
  },
  correctAnswer: "A",
  rationaleCorrect: "Projectile vomiting in a young infant may suggest a serious condition such as pyloric stenosis. The baby should be kept nil by mouth to prevent further vomiting and aspiration while awaiting medical review.",
  rationalesIncorrect: {
    B: "Feeding may worsen vomiting and increase the risk of aspiration.",
    C: "The baby may need intravenous fluids, but giving a large volume without prescription and proper assessment is unsafe."
  }
},

// Question 9
{
  question: "After treatment for an acute asthma attack, a patient is taught how to use a metered-dose inhaler. Which action shows that the patient needs more teaching?",
  options: {
    A: "Waiting 1–2 minutes before taking another puff.",
    B: "Pressing the inhaler while breathing in slowly.",
    C: "Breathing out immediately after inhaling the medicine."
  },
  correctAnswer: "C",
  rationaleCorrect: "After inhaling medication, the patient should hold the breath for about 10 seconds if possible. This allows the medication to settle in the airways. Breathing out immediately reduces drug deposition in the lungs.",
  rationalesIncorrect: {
    A: "Waiting 1–2 minutes before taking another puff is appropriate when more than one puff is prescribed.",
    B: "Pressing the inhaler while breathing in slowly is correct technique because the medication should be released as the patient inhales."
  }
},

// Question 10
{
  question: "A pregnant woman in labour suddenly becomes highly restless, speaks loudly, paces around the room, and refuses medication. She has a history of bipolar disorder. What should be the nurse’s priority nursing diagnosis?",
  options: {
    A: "Ineffective coping.",
    B: "Impaired social interaction.",
    C: "Risk for injury."
  },
  correctAnswer: "C",
  rationaleCorrect: "The immediate concern is safety. Agitation, restlessness, refusal of treatment, and poor impulse control can place both the mother and unborn baby at risk. The nurse should first prevent harm.",
  rationalesIncorrect: {
    A: "Ineffective coping may apply, but it is not the immediate priority when safety is threatened.",
    B: "Impaired social interaction may be present, but it is less urgent than preventing injury."
  }
},

// Question 11
{
  question: "A student who had a previous abortion tells the midwife two years later that she has never been pregnant. Which defence mechanism is most likely being used?",
  options: {
    A: "Repression.",
    B: "Displacement.",
    C: "Sublimation."
  },
  correctAnswer: "A",
  rationaleCorrect: "Repression is an unconscious defence mechanism where distressing memories or experiences are pushed out of conscious awareness. The previous abortion may be too painful or emotionally difficult for the client to acknowledge.",
  rationalesIncorrect: {
    B: "Displacement occurs when feelings are transferred from the real source to a safer target, such as shouting at someone else after being upset.",
    C: "Sublimation means redirecting unacceptable impulses into socially acceptable activities, such as channelling anger into sports."
  }
},

// Question 12
{
  question: "A man admitted after a divorce threat is placed on suicide precautions. During assessment, which area should the nurse observe most closely?",
  options: {
    A: "Thought process.",
    B: "Mood and affect.",
    C: "Level of thought."
  },
  correctAnswer: "B",
  rationaleCorrect: "Mood and affect give important clues about depression, hopelessness, despair, and emotional distress, which are strongly associated with suicide risk. The nurse should assess whether the patient appears severely depressed, withdrawn, hopeless, or emotionally unstable.",
  rationalesIncorrect: {
    A: "Thought process is important, but it focuses more on the organization of thinking rather than the emotional warning signs of suicide risk.",
    C: "Level of thought is not a standard priority assessment area for suicide potential."
  }
},

// Question 13
{
  question: "A patient with a long-standing mental illness has been prescribed electroconvulsive therapy, but the relatives are afraid and unwilling to give consent. What should the nurse do?",
  options: {
    A: "Explain the benefits and possible side effects of ECT.",
    B: "Persuade the relatives to sign the consent form quickly.",
    C: "Show them other patients who improved after ECT."
  },
  correctAnswer: "A",
  rationaleCorrect: "The nurse should provide accurate, balanced information to help the relatives make an informed decision. This includes explaining why ECT is prescribed, how it is done, its benefits, and possible side effects.",
  rationalesIncorrect: {
    B: "Consent must be informed and voluntary. The nurse should not force or rush relatives into signing.",
    C: "Showing them other patients who improved after ECT would breach confidentiality and is not an ethical way to obtain consent."
  }
},

// Question 14
{
  question: "A sexually active woman reports thin whitish vaginal discharge. Microscopy shows epithelial cells with blurred borders, and vaginal pH is alkaline. What is the most likely diagnosis?",
  options: {
    A: "Candida infection.",
    B: "Bacterial vaginosis.",
    C: "Trichomoniasis."
  },
  correctAnswer: "B",
  rationaleCorrect: "Bacterial vaginosis is associated with clue cells, which are squamous epithelial cells with blurred margins. It also commonly causes an alkaline vaginal pH and thin discharge.",
  rationalesIncorrect: {
    A: "Candida infection usually causes thick, white, curd-like discharge and itching, with normal vaginal pH.",
    C: "Trichomoniasis may cause frothy, greenish-yellow discharge and a strawberry cervix, not clue cells."
  }
},

// Question 15
{
  question: "A woman who had severe postpartum haemorrhage after delivery now reports amenorrhoea, fatigue, and failure to produce enough breast milk. Pregnancy test is negative. What is the most likely cause of her amenorrhoea?",
  options: {
    A: "Lactational amenorrhoea.",
    B: "Sheehan’s syndrome.",
    C: "Pregnancy."
  },
  correctAnswer: "B",
  rationaleCorrect: "Sheehan’s syndrome occurs when severe postpartum haemorrhage causes pituitary gland damage. This can lead to failure of lactation, amenorrhoea, fatigue, and hormonal deficiency.",
  rationalesIncorrect: {
    A: "Lactational amenorrhoea is unlikely because she is not breastfeeding successfully and has symptoms suggesting pituitary dysfunction.",
    C: "Pregnancy is unlikely because the pregnancy test is negative."
  }
},

// Question 16
{
  question: "A client with emphysema is being taught pursed-lip breathing. What is the main purpose of this breathing technique?",
  options: {
    A: "To strengthen the diaphragm.",
    B: "To improve carbon dioxide elimination.",
    C: "To increase appetite."
  },
  correctAnswer: "B",
  rationaleCorrect: "Pursed-lip breathing helps keep the airways open for longer during expiration. This prevents air trapping and promotes better removal of carbon dioxide, which is important in emphysema.",
  rationalesIncorrect: {
    A: "Diaphragmatic breathing may help improve breathing muscle use, but pursed-lip breathing mainly helps with controlled exhalation.",
    C: "Pursed-lip breathing is not primarily used to increase appetite."
  }
},

// Question 17
{
  question: "A man reports severe pain and swelling in the lower leg. Assessment shows a tense calf, reduced sensation, and absent pedal pulse. Why should the nurse urgently ask when the symptoms started?",
  options: {
    A: "Irreversible tissue damage can occur within a few hours if circulation is not restored.",
    B: "Compartment syndrome usually resolves on its own after several days.",
    C: "Muscle swelling commonly causes harmless metabolic changes."
  },
  correctAnswer: "A",
  rationaleCorrect: "The findings suggest possible compartment syndrome or severe vascular compromise. Time is critical because prolonged poor blood supply can cause irreversible nerve and muscle damage.",
  rationalesIncorrect: {
    B: "Compartment syndrome does not usually resolve on its own. It is a surgical emergency.",
    C: "Muscle swelling in this context is dangerous because it can impair circulation and nerve function."
  }
},

// Question 18
{
  question: "After completing a physical assessment, a nurse identifies the client’s nursing problems and begins setting goals and expected outcomes. Which phase of the nursing process is being used?",
  options: {
    A: "Implementation.",
    B: "Planning.",
    C: "Evaluation."
  },
  correctAnswer: "B",
  rationaleCorrect: "Planning involves setting goals, expected outcomes, and nursing interventions based on identified nursing diagnoses. This step guides the care that will be provided.",
  rationalesIncorrect: {
    A: "Implementation is the stage where planned nursing interventions are carried out.",
    C: "Evaluation involves determining whether the goals and expected outcomes have been achieved."
  }
},

// Question 19
{
  question: "A man with a previous manic episode now presents with persistent low mood, loss of interest, and marked psychomotor retardation. Which medication combination is most appropriate?",
  options: {
    A: "Antipsychotics and antidepressants only.",
    B: "Antidepressants and mood stabilizers.",
    C: "Antidepressants and benzodiazepines."
  },
  correctAnswer: "B",
  rationaleCorrect: "In bipolar depression, antidepressants should be used carefully and usually with a mood stabilizer to reduce the risk of triggering mania. Mood stabilizers help control the bipolar illness.",
  rationalesIncorrect: {
    A: "Antipsychotics and antidepressants only may not adequately address mood stabilization unless the antipsychotic has mood-stabilizing properties and is prescribed appropriately.",
    C: "Benzodiazepines may reduce anxiety or agitation, but they do not stabilize bipolar mood disorder."
  }
},

// Question 20
{
  question: "A woman with type 2 diabetes has poor dietary habits, obesity, and low exercise levels. The nurse and client jointly develop a plan for food monitoring, exercise, and weight reduction. Which nursing theory is reflected in this approach?",
  options: {
    A: "Orem’s self-care theory.",
    B: "Nightingale’s environmental theory.",
    C: "Abdellah’s nursing theory."
  },
  correctAnswer: "A",
  rationaleCorrect: "Orem’s theory emphasizes helping clients develop the ability to care for themselves. In this case, the nurse supports the client to take responsibility for diet, exercise, and lifestyle modification.",
  rationalesIncorrect: {
    B: "Nightingale’s environmental theory focuses mainly on the role of the environment in health and recovery.",
    C: "Abdellah’s nursing theory focuses on identifying and solving patient problems, but the main emphasis in this scenario is self-care."
  }
},

// Question 21
{
  question: "A patient with active gastrointestinal bleeding also has atrial fibrillation. The nurse is asked to give an anticoagulant but is concerned that it may worsen the bleeding. Which ethical principle is reflected in the nurse’s concern?",
  options: {
    A: "Beneficence.",
    B: "Non-maleficence.",
    C: "Justice."
  },
  correctAnswer: "B",
  rationaleCorrect: "Non-maleficence means avoiding harm. The nurse’s concern is that administering an anticoagulant during active bleeding could worsen the patient’s condition.",
  rationalesIncorrect: {
    A: "Beneficence means doing good or promoting the patient’s welfare, but the focus here is avoiding harm.",
    C: "Justice refers to fairness and equal treatment, which is not the main issue in this scenario."
  }
},

// Question 22
{
  question: "A woman already diagnosed with hypertension attends the clinic for routine review and monitoring to prevent complications. This is an example of which level of prevention?",
  options: {
    A: "Primary prevention.",
    B: "Secondary prevention.",
    C: "Health promotion only."
  },
  correctAnswer: "B",
  rationaleCorrect: "Secondary prevention involves early detection, treatment, and monitoring of existing disease to prevent progression and complications. Reviewing a known hypertensive patient fits this level according to the provided answer.",
  rationalesIncorrect: {
    A: "Primary prevention aims to prevent disease before it occurs, such as lifestyle education for someone without hypertension.",
    C: "Health promotion is broader and may occur at all levels, but the specific situation is disease monitoring and control."
  }
},

// Question 23
{
  question: "A postmenopausal woman reports vaginal spotting and bleeding after intercourse. Pelvic examination shows features of vaginal atrophy. What should be the next best investigation?",
  options: {
    A: "Laparoscopy.",
    B: "Pelvic ultrasound.",
    C: "Observation only."
  },
  correctAnswer: "B",
  rationaleCorrect: "Postmenopausal bleeding must always be investigated because it may indicate endometrial pathology, including malignancy. Pelvic ultrasound helps assess the uterus and endometrial thickness.",
  rationalesIncorrect: {
    A: "Laparoscopy is not the first investigation for postmenopausal bleeding.",
    C: "Observation only is inappropriate because postmenopausal bleeding should not be ignored, even if vaginal atrophy is suspected."
  }
},

// Question 24
{
  question: "A patient with suspected evolving myocardial infarction refuses admission and wants to go home. The nurse explains that the first 24 hours are dangerous mainly because of the risk of:",
  options: {
    A: "Life-threatening ventricular dysrhythmias.",
    B: "Stable chronic heart failure.",
    C: "Pulmonary embolism."
  },
  correctAnswer: "A",
  rationaleCorrect: "The greatest early danger after myocardial infarction is serious cardiac rhythm disturbance, especially ventricular dysrhythmias, which can lead to sudden death. Close monitoring is therefore essential.",
  rationalesIncorrect: {
    B: "Heart failure can occur after myocardial infarction, but sudden dysrhythmias are the major early threat.",
    C: "Pulmonary embolism is serious, but it is not the greatest immediate risk within the first 24 hours of myocardial infarction."
  }
},

// Question 25
{
  question: "A child suffers a severe injury because of parental neglect. While caring for the child, which ethical principle should guide the health team to act in the child’s best interest?",
  options: {
    A: "Non-maleficence.",
    B: "Beneficence.",
    C: "Maleficence."
  },
  correctAnswer: "B",
  rationaleCorrect: "Beneficence means doing good and acting in the best interest of the patient. In this case, the health team must provide care that promotes the child’s welfare and protects the child from further harm.",
  rationalesIncorrect: {
    A: "Non-maleficence means avoiding harm. It is important, but the stronger principle here is actively doing good for the injured child.",
    C: "Maleficence means doing harm, which is unethical."
  }
},

// Question 26
{
  question: "An elderly woman is worried about memory loss and asks for assessment for possible dementia. Which laboratory test may be included to check for a reversible cause of cognitive decline?",
  options: {
    A: "Magnesium level.",
    B: "HIV test only.",
    C: "Vitamin B12 level."
  },
  correctAnswer: "C",
  rationaleCorrect: "Vitamin B12 deficiency can cause cognitive impairment, memory problems, and neurological symptoms. It is one of the reversible causes that may be checked during dementia assessment.",
  rationalesIncorrect: {
    A: "Magnesium is not usually a key initial investigation for dementia assessment.",
    B: "HIV testing may be considered in selected cases, but vitamin B12 is a common test for reversible cognitive impairment."
  }
},

// Question 27
{
  question: "A man with metastatic prostate cancer tells the nurse how he wants to be managed if he later becomes unable to speak for himself. This document or instruction is called an advance:",
  options: {
    A: "Directive.",
    B: "Notice.",
    C: "Instruction."
  },
  correctAnswer: "A",
  rationaleCorrect: "An advance directive allows a person to state their wishes about future healthcare decisions in case they later become unable to communicate or make decisions.",
  rationalesIncorrect: {
    B: "Notice is not the correct formal term for future healthcare wishes.",
    C: "Although it may contain instructions, the formal term is advance directive."
  }
},

// Question 28
{
  question: "A patient with cancer and respiratory failure has an advance directive refusing ventilator support. The spouse is distressed and asks the nurse to put the patient on a ventilator. What should the nurse do first?",
  options: {
    A: "Review the advance directive with the spouse.",
    B: "Immediately call the hospital ethics committee.",
    C: "Tell the spouse that withdrawing care is the right thing to do."
  },
  correctAnswer: "A",
  rationaleCorrect: "The nurse should first help the spouse understand the patient’s documented wishes. Advance directives guide care when the patient cannot speak for themselves.",
  rationalesIncorrect: {
    B: "The ethics committee may be needed if the conflict continues, but the first step is to review the directive with the spouse.",
    C: "This response is judgmental and does not support the spouse emotionally or ethically."
  }
},

// Question 29
{
  question: "A child with acute lymphoblastic leukaemia is receiving vincristine and prednisolone. The child begins to complain of constipation. Which treatment is most likely responsible?",
  options: {
    A: "Bowel obstruction from leukaemic mass.",
    B: "Toxic effect of prednisolone.",
    C: "Side effect of vincristine."
  },
  correctAnswer: "C",
  rationaleCorrect: "Vincristine can cause peripheral and autonomic neuropathy. Autonomic nerve involvement can reduce bowel movement, leading to constipation.",
  rationalesIncorrect: {
    A: "Bowel obstruction from a leukaemic mass is less likely in the context of vincristine therapy and typical drug-related constipation.",
    B: "Prednisolone has many side effects, but constipation is more classically associated with vincristine."
  }
},
// Question 30
{
  question: "During assessment of a 6-month-old infant, the nurse observes that the anterior fontanelle appears tense and bulging while the baby is quiet and not crying. This finding may suggest:",
  options: {
    A: "Infection.",
    B: "Depression.",
    C: "Rehydration."
  },
  correctAnswer: "A",
  rationaleCorrect: "A bulging anterior fontanelle in an infant is abnormal, especially when the child is calm. It may suggest increased intracranial pressure, which can occur in serious infections such as meningitis or encephalitis. The nurse should report this finding promptly.",
  rationalesIncorrect: {
    B: "Depression is not associated with a bulging fontanelle. A depressed or sunken fontanelle is more commonly linked with dehydration.",
    C: "Rehydration should help restore a sunken fontanelle to normal. It does not cause a tense or bulging fontanelle."
  }
},

// Question 31
{
  question: "An infant is brought to the clinic with fever, irritability, poor feeding, and a bulging fontanelle. The nurse recognizes that this finding is most concerning because it may indicate disease affecting the:",
  options: {
    A: "Respiratory system.",
    B: "Central nervous system.",
    C: "Cardiovascular system."
  },
  correctAnswer: "B",
  rationaleCorrect: "A bulging fontanelle suggests increased pressure inside the skull. Together with fever, irritability, and poor feeding, it may indicate central nervous system disease such as meningitis, encephalitis, hydrocephalus, or raised intracranial pressure.",
  rationalesIncorrect: {
    A: "Respiratory problems usually present with cough, fast breathing, chest indrawing, or cyanosis, not a bulging fontanelle.",
    C: "Cardiovascular problems may cause poor feeding, cyanosis, sweating, or difficulty breathing, but a bulging fontanelle points more strongly to the brain and meninges."
  }
},

// Question 32
{
  question: "A senior midwife tells student nurses that protecting patients means recognizing unsafe situations early, acting quickly, and reporting risks before harm occurs. Which actions best demonstrate this responsibility?",
  options: {
    A: "I, II and III.",
    B: "I, II, III and IV.",
    C: "II and IV."
  },
  correctAnswer: "B",
  rationaleCorrect: "Patient safety is a broad professional responsibility. It includes teamwork, quick action when danger is identified, reporting unsafe situations, and maintaining trustworthy and accountable professional practice.",
  rationalesIncorrect: {
    A: "Collaboration, prompt action, and reporting are correct, but this option is incomplete because accountability and trustworthiness are also part of safe professional practice.",
    C: "Acting quickly and being trustworthy are important, but this option leaves out teamwork and reporting unsafe situations."
  }
},

// Question 33
{
  question: "A child with severe wasting, oedema, poor appetite, and signs of infection is diagnosed with severe acute malnutrition with complications. What type of care is required?",
  options: {
    A: "I and III.",
    B: "I, II and III.",
    C: "I and II."
  },
  correctAnswer: "A",
  rationaleCorrect: "Severe acute malnutrition with complications requires hospitalization and specialized care. The child needs close monitoring, careful feeding, treatment of infection, and prevention or correction of hypoglycaemia, hypothermia, dehydration, and electrolyte imbalance.",
  rationalesIncorrect: {
    B: "Home care alone is not appropriate when medical complications are present. Home or community management is more suitable for uncomplicated cases.",
    C: "Hospitalization is correct, but home care alone is not enough. The child needs specialized inpatient care."
  }
},

// Question 34
{
  question: "A child is being prepared for surgery for Hirschsprung’s disease. The surgeon orders bowel cleansing before the operation. Which enema solution is safest for this child?",
  options: {
    A: "Tap water.",
    B: "Hypertonic saline.",
    C: "Isotonic saline."
  },
  correctAnswer: "C",
  rationaleCorrect: "Isotonic saline is safest because it has a similar concentration to body fluids. It cleanses the bowel while reducing the risk of fluid and electrolyte imbalance, which children are more vulnerable to.",
  rationalesIncorrect: {
    A: "Tap water can be absorbed through the bowel and may cause water intoxication or electrolyte imbalance, especially in children.",
    B: "Hypertonic saline can draw fluid into the bowel and may cause dehydration or electrolyte disturbances."
  }
},

// Question 35
{
  question: "A child diagnosed with iron deficiency anaemia is being discharged. Which meal choice should the nurse recommend to help improve the child’s iron level?",
  options: {
    A: "Bread, beans, and almond.",
    B: "Green leafy vegetables, lentils, and meat.",
    C: "Cereal, yam, and fruit juice."
  },
  correctAnswer: "B",
  rationaleCorrect: "Iron deficiency anaemia requires foods rich in iron. Meat provides haem iron, which is easily absorbed by the body, while green leafy vegetables and lentils provide non-haem iron. This combination supports haemoglobin production.",
  rationalesIncorrect: {
    A: "Beans contain some iron, but this option is less complete and does not include a rich haem iron source such as meat.",
    C: "Cereal and yam are mainly carbohydrate sources. Fruit juice may provide vitamin C, but this meal is not the best iron-rich option."
  }
},

// Question 36
{
  question: "A child is suspected of having pulmonary tuberculosis. Which of the following is not usually considered a specific investigation for confirming pulmonary tuberculosis?",
  options: {
    A: "Sputum examination.",
    B: "Investigation of family contacts.",
    C: "General X-ray examination."
  },
  correctAnswer: "C",
  rationaleCorrect: "Pulmonary tuberculosis is investigated using tests that focus on the lungs and source of infection, such as sputum examination and chest X-ray. A general X-ray examination is too broad and non-specific for confirming pulmonary tuberculosis.",
  rationalesIncorrect: {
    A: "Sputum examination can help detect tuberculosis organisms and is an important investigation when pulmonary TB is suspected.",
    B: "Investigation of family contacts is important in TB control because it helps identify possible sources of infection and others who may need screening."
  }
},

// Question 37
{
  question: "A child with sickle cell disease is admitted with severe limb pain due to vaso-occlusive crisis. Which nursing measures are appropriate?",
  options: {
    A: "I, III and IV.",
    B: "I, II and III.",
    C: "I, II and IV."
  },
  correctAnswer: "A",
  rationaleCorrect: "Pain relief, hydration, and warmth are key interventions in sickle cell crisis. Analgesics reduce pain, fluids help reduce blood viscosity, and warmth helps prevent vasoconstriction, which can worsen sickling.",
  rationalesIncorrect: {
    B: "Analgesics and fluids are appropriate, but vigorous exercise is wrong because it increases oxygen demand and may worsen the crisis.",
    C: "Analgesics and warmth are appropriate, but vigorous exercise is inappropriate during an acute painful crisis."
  }
},

// Question 38
{
  question: "A child with measles refuses food and cries whenever swallowing is attempted. The nurse explains that measles can lead to malnutrition mainly because:",
  options: {
    A: "The foods usually given during measles lack important nutrients.",
    B: "Fever and mouth ulcers interfere with feeding.",
    C: "Measles is always associated with profuse vomiting."
  },
  correctAnswer: "B",
  rationaleCorrect: "Measles commonly causes fever, malaise, sore mouth, mouth ulcers, poor appetite, and difficulty feeding. Reduced food intake during illness can quickly lead to weight loss and malnutrition, especially in young children.",
  rationalesIncorrect: {
    A: "The main problem is not necessarily the type of food given, but the child’s reduced ability or willingness to eat.",
    C: "Vomiting may occur in some children, but measles is not always associated with profuse vomiting, and this is not the main cause of malnutrition."
  }
},

// Question 39
{
  question: "A client has been losing small amounts of blood over several months due to chronic bleeding. Which condition is most likely to develop?",
  options: {
    A: "Aplastic anaemia.",
    B: "Pernicious anaemia.",
    C: "Iron depletion."
  },
  correctAnswer: "C",
  rationaleCorrect: "Chronic blood loss gradually removes iron from the body because iron is contained in haemoglobin within red blood cells. Over time, iron stores become depleted, leading to iron deficiency anaemia.",
  rationalesIncorrect: {
    A: "Aplastic anaemia results from bone marrow failure, not chronic blood loss.",
    B: "Pernicious anaemia is caused by vitamin B12 deficiency due to lack of intrinsic factor, not by chronic bleeding."
  }
},

// Question 40
{
  question: "A married client privately tells the nurse about her unfaithfulness and asks that the information be kept confidential. The nurse later informs the husband because she believes she would want to know if she were in his position. The nurse’s action is based on which ethical approach?",
  options: {
    A: "Nursing ethics.",
    B: "Christian ethics.",
    C: "Islamic ethics."
  },
  correctAnswer: "B",
  rationaleCorrect: "The nurse acted based on the idea of treating others as she would want to be treated, which is commonly linked with the Golden Rule in Christian ethics. However, the action is professionally wrong because it breaches patient confidentiality.",
  rationalesIncorrect: {
    A: "Nursing ethics requires confidentiality, privacy, and respect for the client’s rights. Informing the husband without the client’s consent violates professional nursing ethics.",
    C: "Islamic ethics also values honesty and morality, but the reasoning in the scenario specifically reflects the Golden Rule commonly associated with Christian ethics."
  }
},

// Question 41
{
  question: "A restless psychiatric client keeps pacing on the ward. A staff member says, “If you do not sit down quietly, we will lock you in the seclusion room.” This statement is best described as:",
  options: {
    A: "Battery.",
    B: "Threat.",
    C: "Assault."
  },
  correctAnswer: "B",
  rationaleCorrect: "The staff member is using fear to control the client’s behaviour. Threatening seclusion as punishment is inappropriate and may increase anxiety, agitation, and mistrust. Seclusion should only be used according to policy when there is serious risk.",
  rationalesIncorrect: {
    A: "Battery involves intentional physical contact or touching without consent. In this scenario, no physical contact has occurred.",
    C: "Assault may involve making someone fear immediate harm, but the most direct description of the staff member’s statement is a threat."
  }
},

// Question 42
{
  question: "A client is scheduled for electroconvulsive therapy. After receiving clear information about the procedure, benefits, risks, and alternatives, the client agrees to proceed. This is known as:",
  options: {
    A: "Informed consent.",
    B: "Informed acceptance.",
    C: "Informed permission."
  },
  correctAnswer: "A",
  rationaleCorrect: "Informed consent means the client voluntarily agrees to a procedure after receiving adequate information about what will be done, why it is needed, the benefits, possible risks, and available alternatives.",
  rationalesIncorrect: {
    B: "Informed acceptance is not the standard legal or professional term used in healthcare.",
    C: "Informed permission may sound similar, but the correct healthcare term is informed consent."
  }
},

// Question 43
{
  question: "A client booked for appendicectomy refuses surgery and requests discharge against medical advice. The nurse locks the client in a room to prevent him from leaving. The nurse’s action is an example of:",
  options: {
    A: "Defamation of character.",
    B: "Ethical egoism.",
    C: "False imprisonment."
  },
  correctAnswer: "C",
  rationaleCorrect: "False imprisonment occurs when a person is unlawfully restrained or prevented from leaving without legal justification. A competent adult has the right to refuse treatment, even if the decision is unsafe.",
  rationalesIncorrect: {
    A: "Defamation of character involves damaging someone’s reputation through false spoken or written statements.",
    B: "Ethical egoism means acting in one’s own self-interest. The main issue here is unlawful restriction of the client’s freedom."
  }
},

// Question 44
{
  question: "A dehydrated client is being monitored with an intake and output chart. The nurse remembers that some body fluids are lost through the skin and lungs but cannot be directly measured. These are called:",
  options: {
    A: "Insensible losses.",
    B: "Sensible losses.",
    C: "Unmeasured losses."
  },
  correctAnswer: "A",
  rationaleCorrect: "Insensible losses are fluid losses that occur continuously but cannot be easily measured. They occur mainly through evaporation from the skin and water vapour lost during breathing.",
  rationalesIncorrect: {
    B: "Sensible losses are measurable fluid losses, such as urine, vomitus, stool, wound drainage, or blood loss.",
    C: "Unmeasured losses may sound correct in ordinary language, but the proper clinical term is insensible losses."
  }
},

// Question 45
{
  question: "At a child welfare clinic, the community health nurse plots a child’s growth on a growth monitoring chart. Which measurement is commonly used to assess growth in children?",
  options: {
    A: "Weight for age.",
    B: "Body mass index.",
    C: "Height for age."
  },
  correctAnswer: "A",
  rationaleCorrect: "Weight for age is commonly used in child welfare clinics to monitor growth and detect underweight or growth faltering. It is simple, quick, and useful for tracking whether a child is gaining weight appropriately over time.",
  rationalesIncorrect: {
    B: "Body mass index can be used in older children and adults, but it is not the usual simple measure used for routine growth monitoring in young children.",
    C: "Height for age is useful for assessing stunting, but weight for age is more commonly used in routine child growth monitoring."
  }
},

// Question 46
{
  question: "A community has a serious problem with open defaecation. Which intervention would be the best practical step to help solve the problem?",
  options: {
    A: "Provision of pit latrines.",
    B: "Individual ownership only.",
    C: "Institution of sanctions only."
  },
  correctAnswer: "A",
  rationaleCorrect: "Open defaecation is often linked to lack of access to safe toilet facilities. Providing pit latrines gives the community a practical and hygienic alternative for faecal disposal, reducing environmental contamination and the spread of disease.",
  rationalesIncorrect: {
    B: "Individual ownership may promote responsibility, but without actual toilet facilities, the problem may continue.",
    C: "Sanctions alone are unlikely to solve the problem if the community lacks proper sanitation facilities."
  }
},

// Question 47
{
  question: "A rural community uses a pond as its main source of domestic water. Which measures would help reduce pollution of the water source?",
  options: {
    A: "I and II.",
    B: "I and III.",
    C: "II and III."
  },
  correctAnswer: "C",
  rationaleCorrect: "Deepening the fetching point can help people draw cleaner water and reduce disturbance of mud and contaminants. Zoning the pond for different purposes, such as fetching, washing, and watering animals, reduces contamination of the drinking water area.",
  rationalesIncorrect: {
    A: "Deepening the fetching point is helpful, but blocking water flow may worsen stagnation and contamination.",
    B: "Zoning is useful, but blocking water movement is not a good pollution-control measure."
  }
},

// Question 48
{
  question: "A confused patient falls from bed because the nurse failed to raise the side rails despite knowing the patient was at risk of falling. This is an example of:",
  options: {
    A: "Battery.",
    B: "Assault.",
    C: "Negligence."
  },
  correctAnswer: "C",
  rationaleCorrect: "Negligence occurs when a nurse fails to provide the expected standard of care, resulting in harm or risk of harm to the patient. A confused patient is at risk of falling, so failure to apply fall precautions may constitute negligence.",
  rationalesIncorrect: {
    A: "Battery involves touching or treating a patient without consent.",
    B: "Assault involves threatening a person or making them fear harm. The issue here is failure to take reasonable safety precautions."
  }
},

// Question 49
{
  question: "A depressed client tells the nurse, “No one really cares what happens to me.” Which response is most therapeutic?",
  options: {
    A: "“That is not true; many people care about you.”",
    B: "“It sounds like you feel ignored and uncared for.”",
    C: "“Tell me why you think no one cares about you.”"
  },
  correctAnswer: "B",
  rationaleCorrect: "This response reflects the client’s feelings and encourages further expression. It shows that the nurse is listening and trying to understand the client’s emotional experience without arguing, judging, or dismissing the statement.",
  rationalesIncorrect: {
    A: "This is false reassurance. It may make the client feel misunderstood or stop them from expressing deeper feelings.",
    C: "This may sound challenging or demanding. A depressed client may interpret it as interrogation rather than support."
  }
},

// Question 50
{
  question: "A nurse is teaching parents about injury prevention for toddlers and preschool children. Which safety measures are developmentally appropriate?",
  options: {
    A: "I, III and IV.",
    B: "II, III and IV.",
    C: "I, II and III."
  },
  correctAnswer: "B",
  rationaleCorrect: "Toddlers and preschool children are curious and active, but they do not fully understand danger. Harmful substances should be kept out of reach, constant supervision is needed, and doors should be kept closed to prevent wandering, falls, burns, drowning, and poisoning.",
  rationalesIncorrect: {
    A: "Supervision and keeping doors closed are useful, but this option leaves out keeping harmful substances away, which is a major safety measure.",
    C: "Keeping harmful substances away and supervision are correct, but keeping doors closed is also important for this age group."
  }
},

// Question 51
{
  question: "A woman is scheduled for a chest X-ray. Before sending her for the procedure, which question is most important for the nurse to ask?",
  options: {
    A: "“Are you wearing any metal jewellery?”",
    B: "“Are you able to raise your arms?”",
    C: "“Are you currently pregnant?”"
  },
  correctAnswer: "C",
  rationaleCorrect: "Pregnancy status is very important before radiological investigations because radiation may pose risks to the developing foetus, especially in early pregnancy. The nurse must check for possible pregnancy so that precautions or alternative investigations can be considered.",
  rationalesIncorrect: {
    A: "Asking about metal jewellery is relevant because metal can interfere with the image, but pregnancy status is more important for safety.",
    B: "Asking whether the patient can raise her arms may help with positioning, but it is not the most important safety question."
  }
},

// Question 52
{
  question: "A young woman asks why females are more likely than males to develop cystitis. Which explanation is most accurate?",
  options: {
    A: "The urethra is close to the anus.",
    B: "The female urethra is shorter.",
    C: "Females have altered urinary pH."
  },
  correctAnswer: "B",
  rationaleCorrect: "Females are more prone to cystitis because the urethra is shorter, allowing bacteria to travel more easily from the outside into the bladder. The short distance makes ascending urinary tract infection more likely.",
  rationalesIncorrect: {
    A: "The closeness of the urethra to the anus also contributes to infection risk, but the shorter urethra is the stronger anatomical reason.",
    C: "Urinary pH may vary, but it is not the main reason females have a higher risk of cystitis."
  }
},

// Question 53
{
  question: "A child becomes frightened whenever injections are mentioned. Which nursing actions would help the child cope better with procedures?",
  options: {
    A: "I and III.",
    B: "I, II, III and IV.",
    C: "II, III and IV."
  },
  correctAnswer: "B",
  rationaleCorrect: "Children cope better when they are prepared honestly and supported emotionally. Praise or comfort after the procedure reassures the child, simple explanations build trust, avoiding surprise reduces fear, and allowing expression of distress supports emotional adjustment.",
  rationalesIncorrect: {
    A: "Comfort and avoiding surprise are helpful, but this option leaves out explanation and emotional support.",
    C: "Simple explanation, avoiding surprise, and allowing expression of feelings are correct, but the child should also be comforted or praised after the procedure."
  }
},

// Question 54
{
  question: "A patient has an inflamed joint with pain, swelling, redness, and heat. Which general nursing principle is important in managing inflammation?",
  options: {
    A: "Raising the foot end of the bed.",
    B: "Resting the affected part and the body.",
    C: "Providing clean bed linen only."
  },
  correctAnswer: "B",
  rationaleCorrect: "Rest is a fundamental principle in managing inflammation because movement can increase pain, swelling, and tissue irritation. Resting the affected area reduces metabolic demand, prevents further injury, and supports healing.",
  rationalesIncorrect: {
    A: "Elevation may help in some cases of swelling, especially in limbs, but it is not the broad fundamental principle for managing inflammation.",
    C: "Clean bed linen promotes comfort and hygiene, but it does not directly manage inflammation."
  }
},

// Question 55
{
  question: "A pregnant woman at 22 weeks gestation reports swelling of the feet. Which additional findings would support a diagnosis of pre-eclampsia rather than normal pregnancy-related swelling?",
  options: {
    A: "Blood pressure of 140/90 mmHg on two occasions with proteinuria greater than 0.3 g/24 hours.",
    B: "Blood pressure of 130/80 mmHg with thrombocytopenia.",
    C: "Blood pressure of 140/90 mmHg with protein/creatinine ratio less than 0.3."
  },
  correctAnswer: "A",
  rationaleCorrect: "Pre-eclampsia is diagnosed after 20 weeks of gestation when hypertension is present with proteinuria or evidence of organ involvement. Blood pressure of 140/90 mmHg or more on two occasions with significant proteinuria supports pre-eclampsia.",
  rationalesIncorrect: {
    B: "Thrombocytopenia is concerning, but the blood pressure given does not meet the usual diagnostic threshold for hypertension in pregnancy.",
    C: "The blood pressure is raised, but the protein/creatinine ratio is below the usual threshold for significant proteinuria."
  }
},

// Question 56
{
  question: "A group of nurses discuss how they can assist patients to do activities they would normally do for themselves if they had the strength, knowledge, or will. Which nursing theory are they applying?",
  options: {
    A: "Virginia Henderson.",
    B: "Betty Neuman.",
    C: "Florence Nightingale."
  },
  correctAnswer: "A",
  rationaleCorrect: "Virginia Henderson defined nursing as assisting individuals, sick or well, to perform activities contributing to health or recovery that they would do unaided if they had the necessary strength, will, or knowledge. Her theory emphasizes helping patients regain independence.",
  rationalesIncorrect: {
    B: "Betty Neuman’s model focuses on the client as a system responding to stressors.",
    C: "Florence Nightingale’s theory emphasizes the role of the environment, such as ventilation, cleanliness, light, and sanitation, in recovery."
  }
},

// Question 57
{
  question: "Nurses and midwives across the country come together to promote professional development, advocate for independent practice, and address common professional concerns. This group is best described as a:",
  options: {
    A: "Nursing association.",
    B: "Lobbying firm.",
    C: "Political association."
  },
  correctAnswer: "A",
  rationaleCorrect: "A nursing association is a professional body formed to promote the interests of nurses, improve practice standards, support professional development, and advocate for policies that affect nurses, midwives, and patient care.",
  rationalesIncorrect: {
    B: "A lobbying firm is usually hired to influence policy on behalf of clients. It is not the best term for a professional group of nurses and midwives.",
    C: "A political association is mainly formed around political goals or party interests, not professional nursing practice."
  }
},

// Question 58
{
  question: "During a midwifery class, students are asked to identify the feature that does not belong to a gynaecoid pelvis. Which option should they choose?",
  options: {
    A: "Wide pelvic arch.",
    B: "Heart-shaped brim.",
    C: "Shallow cavity."
  },
  correctAnswer: "B",
  rationaleCorrect: "A gynaecoid pelvis is considered favourable for vaginal delivery. It usually has a rounded brim, wide pelvic outlet, wide subpubic arch, and relatively shallow cavity. A heart-shaped brim is characteristic of an android pelvis, not a gynaecoid pelvis.",
  rationalesIncorrect: {
    A: "A wide pelvic arch is a feature of a gynaecoid pelvis and supports vaginal delivery.",
    C: "A shallow pelvic cavity is associated with a favourable gynaecoid pelvis."
  }
},

// Question 59
{
  question: "A student reports having unprotected sex about two weeks ago. She now notices a firm, round, painless sore on her genital area. Which sexually transmitted infection is most likely?",
  options: {
    A: "Gonorrhoea.",
    B: "Syphilis.",
    C: "Genital herpes."
  },
  correctAnswer: "B",
  rationaleCorrect: "Primary syphilis commonly presents as a painless, firm, round ulcer called a chancre. It usually appears at the site where the organism entered the body, such as the genital area, a few weeks after sexual exposure.",
  rationalesIncorrect: {
    A: "Gonorrhoea commonly causes urethral or vaginal discharge, dysuria, pelvic pain, or may be asymptomatic. It does not typically cause a painless chancre.",
    C: "Genital herpes usually causes painful blisters or ulcers, often with burning, tingling, or discomfort."
  }
},

// Question 60
{
  question: "In a hospital, patients are well protected from harassment and infections, but staff needle-stick injuries and workplace violence are ignored, with no reporting system or support for affected workers. Who are the victims of maleficence in this situation?",
  options: {
    A: "Communities.",
    B: "Employees.",
    C: "Families."
  },
  correctAnswer: "B",
  rationaleCorrect: "Maleficence means causing harm or failing to prevent harm. In this scenario, healthcare workers are exposed to preventable harm because needle-stick injuries and workplace violence are not properly reported, managed, or supported. The employees are therefore the direct victims.",
  rationalesIncorrect: {
    A: "The community may be indirectly affected by poor healthcare systems, but the direct victims in this scenario are the workers.",
    C: "Families may suffer indirectly if workers are harmed, but they are not the immediate victims described."
  }
},

// Question 61
{
  question: "A 10-year-old child is brought to the clinic because he repeatedly washes his hands many times after eating and becomes anxious if stopped. Which condition best explains this behaviour?",
  options: {
    A: "Panic disorder.",
    B: "Obsessive-compulsive disorder.",
    C: "Post-traumatic stress disorder."
  },
  correctAnswer: "B",
  rationaleCorrect: "Obsessive-compulsive disorder involves unwanted repetitive thoughts or fears, called obsessions, and repeated behaviours, called compulsions, performed to reduce anxiety. Repeated hand washing is a common compulsion.",
  rationalesIncorrect: {
    A: "Panic disorder involves sudden episodes of intense fear with symptoms such as palpitations, sweating, trembling, chest discomfort, and fear of dying. It does not mainly present as repetitive hand washing.",
    C: "Post-traumatic stress disorder occurs after trauma and may involve flashbacks, nightmares, avoidance, and hyperarousal. Repetitive hand washing alone is more suggestive of OCD."
  }
},

// Question 62
{
  question: "A junior high school student asks why undescended testes can cause infertility later in life. What is the best explanation?",
  options: {
    A: "Sperm produced in undescended testes cannot flow to fertilize an ovum.",
    B: "Normal sperm production requires a temperature lower than body temperature.",
    C: "Undescended testes are abnormal structures and always produce abnormal sperm."
  },
  correctAnswer: "B",
  rationaleCorrect: "The testes are normally located in the scrotum because sperm production requires a temperature slightly lower than normal body temperature. When the testes remain in the abdomen or groin, they are exposed to higher body temperature, which can impair spermatogenesis and increase the risk of infertility.",
  rationalesIncorrect: {
    A: "The main problem is impaired sperm production due to heat, not simply blockage of sperm flow.",
    C: "The testes may be structurally normal initially, but prolonged exposure to higher temperature can damage sperm-producing cells over time."
  }
},
// Question 63
{
  question: "Before a patient undergoes an invasive procedure, the nurse explains what will be done, the possible risks, benefits, and alternatives, and then the patient signs a legal document. This document is known as:",
  options: {
    A: "Informed consent.",
    B: "Advance directive.",
    C: "Power of attorney."
  },
  correctAnswer: "A",
  rationaleCorrect: "Informed consent is a legal and ethical requirement before many procedures. It means the patient has received adequate information about the procedure, understands the risks and benefits, and voluntarily agrees to it.",
  rationalesIncorrect: {
    B: "An advance directive states a person’s future healthcare wishes in case they later become unable to speak for themselves. It is not used to agree to a current procedure.",
    C: "Power of attorney gives another person legal authority to make decisions on behalf of someone. It is not the same as the patient personally consenting to a procedure."
  }
},

// Question 64
{
  question: "A man is newly diagnosed with hepatitis B. His close family members are worried about exposure and ask what can give them immediate protection. What should be recommended?",
  options: {
    A: "Hepatitis B immune globulin should be given.",
    B: "Hepatitis B vaccination should be completed.",
    C: "The patient should be isolated from the family."
  },
  correctAnswer: "A",
  rationaleCorrect: "Hepatitis B immune globulin provides immediate passive immunity because it contains ready-made antibodies against hepatitis B. It is useful after recent exposure, especially for close contacts who may not already be protected.",
  rationalesIncorrect: {
    B: "Hepatitis B vaccination is important for long-term protection, but it does not provide immediate immunity because the body needs time to produce antibodies.",
    C: "Hepatitis B is spread mainly through blood and body fluids, not casual contact such as talking, eating together, or sharing a room. Isolation from the family is unnecessary and stigmatizing."
  }
},

// Question 65
{
  question: "A nurse manager feels overwhelmed by several ward responsibilities and wants to use her working hours more effectively. Which action would best improve her time management?",
  options: {
    A: "Establish priorities.",
    B: "Limit all meetings.",
    C: "Reform all her duties."
  },
  correctAnswer: "A",
  rationaleCorrect: "Effective time management begins with identifying what is most important and urgent. By setting priorities, the manager can focus first on tasks that affect patient safety, staff coordination, and smooth ward functioning.",
  rationalesIncorrect: {
    B: "Some meetings may be necessary for communication, planning, and problem-solving. The issue is not to avoid all meetings, but to use time wisely.",
    C: "Reforming all duties is too broad and unrealistic. The first practical step is to prioritize duties."
  }
},

// Question 66
{
  question: "A client in a manic episode is restless, walking around the ward, talking continuously, and barely sitting down to eat. What is the best way to help the client maintain nutrition?",
  options: {
    A: "Offer foods the client can easily hold and eat while moving around.",
    B: "Serve only the client’s favourite food while the client is pacing.",
    C: "Restrain the client and force-feed the meal."
  },
  correctAnswer: "A",
  rationaleCorrect: "Manic clients are often too hyperactive to sit for long meals. Finger foods, sandwiches, fruits, and high-calorie snacks are helpful because the client can eat while moving. This helps prevent weight loss and exhaustion without increasing agitation.",
  rationalesIncorrect: {
    B: "Favourite foods may help appetite, but the key intervention is providing portable, easy-to-eat foods that suit the client’s hyperactivity.",
    C: "Force-feeding is unsafe, unethical, and can worsen agitation. Restraints should not be used for convenience."
  }
},

// Question 67
{
  question: "A patient with mania talks very fast and rapidly changes from one idea to another before completing the first thought. This behaviour is best explained as:",
  options: {
    A: "Bipolar disorder.",
    B: "Pressure of thought.",
    C: "Patient’s psychiatric history."
  },
  correctAnswer: "B",
  rationaleCorrect: "Pressure of thought occurs when ideas come very rapidly, causing the patient to speak quickly and jump from one topic to another. It is commonly seen in mania and may present as pressured speech or flight of ideas.",
  rationalesIncorrect: {
    A: "Bipolar disorder may be the underlying illness, but the question is asking about the specific behaviour being displayed.",
    C: "A psychiatric history may explain the background, but it does not name the symptom."
  }
},

// Question 68
{
  question: "A mother calls from home and reports that her son, who is on psychiatric medication, has started drooling, his tongue is protruding, and his neck has become stiff. Which medication would be most appropriate to manage this reaction?",
  options: {
    A: "Abilify.",
    B: "Thorazine.",
    C: "Artane."
  },
  correctAnswer: "C",
  rationaleCorrect: "Drooling, tongue protrusion, and neck stiffness suggest an extrapyramidal side effect, especially acute dystonia, which can occur with antipsychotic medications. Artane, also known as trihexyphenidyl, is an anticholinergic medication used to relieve such extrapyramidal symptoms.",
  rationalesIncorrect: {
    A: "Abilify is an antipsychotic medication and is not used to treat this extrapyramidal reaction. Antipsychotics may sometimes contribute to such symptoms.",
    B: "Thorazine is also an antipsychotic and can cause or worsen extrapyramidal side effects rather than relieve them."
  }
},

// Question 69
{
  question: "A psychiatric patient on a general diet asks for vegetarian meals instead. Which nursing action best shows respect for the patient’s autonomy?",
  options: {
    A: "Contact the patient’s legal guardian before any dietary change is made.",
    B: "Obtain a doctor’s order for a vegetarian meal if required by facility policy.",
    C: "Tell the patient that a vegetarian meal cannot replace the general diet."
  },
  correctAnswer: "B",
  rationaleCorrect: "Autonomy means respecting the patient’s right to make personal choices, including food preferences, as long as the choice is safe and does not harm treatment. If the hospital requires a medical order for diet changes, the nurse should facilitate the request.",
  rationalesIncorrect: {
    A: "This is unnecessary unless the patient lacks decision-making capacity or there is a specific legal reason.",
    C: "This ignores the patient’s preference and does not respect autonomy."
  }
},

// Question 70
{
  question: "A baby is delivered after a difficult labour involving shoulder presentation. Which birth injury is the baby most likely to develop?",
  options: {
    A: "Facial nerve paralysis.",
    B: "Brachial nerve palsy.",
    C: "Clavicular nerve palsy."
  },
  correctAnswer: "B",
  rationaleCorrect: "Difficult shoulder delivery can stretch or injure the brachial plexus, the network of nerves supplying the arm. This may result in weakness or paralysis of the affected upper limb.",
  rationalesIncorrect: {
    A: "Facial nerve paralysis is more commonly associated with pressure on the face during delivery or forceps delivery, not shoulder presentation.",
    C: "Clavicular nerve palsy is not the correct term. The clavicle may fracture during difficult delivery, but the classic nerve injury is brachial plexus injury."
  }
},

// Question 71
{
  question: "A 3-year-old child is brought to the health centre with cough and cold. According to IMCI assessment, which findings would indicate the need for urgent referral? I. Chest indrawing. II. Fast breathing. III. Stridor. IV. Fever.",
  options: {
    A: "I only.",
    B: "I and III.",
    C: "I, II and III."
  },
  correctAnswer: "B",
  rationaleCorrect: "Chest indrawing and stridor are danger signs that may indicate severe respiratory illness and the need for urgent referral. Chest indrawing suggests increased work of breathing, while stridor may indicate upper airway obstruction.",
  rationalesIncorrect: {
    A: "Chest indrawing is important, but stridor is also a serious sign requiring urgent attention.",
    C: "Fast breathing suggests pneumonia, but it does not always require urgent hospital referral unless accompanied by danger signs or severe features."
  }
},

// Question 72
{
  question: "A mother reports that her 1-month-old baby suddenly stretches and startles whenever there is a loud sound. What is the best response by the nurse?",
  options: {
    A: "“The baby may be having seizures.”",
    B: "“This is clonus and it will resolve.”",
    C: "“This is appropriate for the baby’s age.”"
  },
  correctAnswer: "C",
  rationaleCorrect: "Startling in response to a loud noise is normal in young infants and is related to the Moro reflex. It shows that the baby’s nervous system is responding to sudden stimulation.",
  rationalesIncorrect: {
    A: "A normal startle response to loud noise is not the same as seizure activity.",
    B: "Clonus refers to rhythmic involuntary muscle contractions, not the normal infant startle reflex."
  }
},

// Question 73
{
  question: "A mother returns to the clinic because her 6-week-old baby developed a mild fever after immunization. What instruction should the nurse give?",
  options: {
    A: "Give paracetamol syrup as prescribed.",
    B: "Report back to the clinic immediately.",
    C: "Tepid sponge the baby only."
  },
  correctAnswer: "A",
  rationaleCorrect: "A slight fever after immunization is a common mild reaction. Paracetamol syrup may be given in the correct dose to reduce fever and discomfort. The mother should also observe the baby and return if fever becomes high, persists, or danger signs develop.",
  rationalesIncorrect: {
    B: "Immediate return may not be necessary for a mild expected fever unless there are danger signs such as convulsions, persistent crying, difficulty breathing, or poor feeding.",
    C: "Tepid sponging may help in some cases, but paracetamol is more appropriate for post-immunization fever and discomfort when correctly dosed."
  }
},

// Question 74
{
  question: "A breastfeeding mother complains that both breasts have been swollen, painful, and full for three days. Which measures should be included in her care? I. Encourage her to wear a well-fitting brassiere. II. Encourage breastfeeding every 2–3 hours. III. Apply shea butter to relieve the pain.",
  options: {
    A: "II and III.",
    B: "I and III.",
    C: "I and II."
  },
  correctAnswer: "C",
  rationaleCorrect: "A well-fitting supportive brassiere helps reduce discomfort from breast engorgement. Frequent breastfeeding every 2–3 hours helps empty the breasts, improves milk flow, and prevents worsening engorgement.",
  rationalesIncorrect: {
    A: "Frequent breastfeeding is correct, but shea butter does not relieve engorgement effectively and may interfere with hygiene if applied near the nipple.",
    B: "Breast support is useful, but the breast must also be emptied frequently through breastfeeding or expression."
  }
},

// Question 75
{
  question: "A mother is discharged 24 hours after a normal vaginal delivery. The nurse teaches her about lochia changes. Which colour of lochia on the fourth day should she report?",
  options: {
    A: "Alba.",
    B: "Brownish.",
    C: "Greenish."
  },
  correctAnswer: "C",
  rationaleCorrect: "Greenish lochia is abnormal and may suggest infection, especially if associated with offensive odour, fever, abdominal pain, or uterine tenderness. The mother should report this promptly.",
  rationalesIncorrect: {
    A: "Lochia alba is whitish or pale discharge that usually appears later in the postpartum period. It is not typically expected on day four, but it is less alarming than greenish discharge.",
    B: "Brownish or pinkish-brown lochia may occur as lochia changes from red to serosa and can be part of normal postpartum changes."
  }
},

// Question 76
{
  question: "A mother notices that her 3-day-old baby has yellowish skin and yellow eyes but is otherwise feeding well. What is the most likely cause?",
  options: {
    A: "Rhesus incompatibility.",
    B: "ABO incompatibility.",
    C: "Physiological jaundice."
  },
  correctAnswer: "C",
  rationaleCorrect: "Physiological jaundice commonly appears after the first 24 hours of life, often around the second or third day. It occurs because the newborn’s liver is still immature and less efficient at processing bilirubin.",
  rationalesIncorrect: {
    A: "Rhesus incompatibility may cause severe pathological jaundice, often appearing earlier and progressing rapidly.",
    B: "ABO incompatibility can cause pathological jaundice, but mild jaundice appearing around day three in a well-feeding baby is more consistent with physiological jaundice."
  }
},

// Question 77
{
  question: "A 4-year-old child is brought to the clinic with frequent passage of “rice-water” stools, dehydration, and a weak pulse. What condition is most likely?",
  options: {
    A: "Amoebic dysentery.",
    B: "Gastroenteritis.",
    C: "Cholera."
  },
  correctAnswer: "C",
  rationaleCorrect: "Cholera classically presents with profuse watery diarrhoea described as rice-water stools. Severe fluid loss can rapidly lead to dehydration, weak pulse, shock, and death if not treated urgently.",
  rationalesIncorrect: {
    A: "Amoebic dysentery usually presents with blood and mucus in stool, abdominal cramps, and tenesmus, not rice-water stools.",
    B: "Gastroenteritis can cause diarrhoea and vomiting, but rice-water stools with marked dehydration strongly suggest cholera."
  }
},

// Question 78
{
  question: "A 10-month-old baby can take toys to the mouth and say “mama,” but is still unable to sit without support. What should the nurse do?",
  options: {
    A: "Begin range-of-motion exercises.",
    B: "Refer the child to the doctor.",
    C: "Reassure the mother that it is normal."
  },
  correctAnswer: "B",
  rationaleCorrect: "By 10 months, a baby is expected to sit without support. Inability to do so suggests delayed gross motor development and requires further assessment to identify possible neurological, nutritional, developmental, or musculoskeletal causes.",
  rationalesIncorrect: {
    A: "Exercises should not be started without proper assessment and diagnosis.",
    C: "Reassurance is inappropriate because inability to sit unsupported at 10 months is a developmental concern."
  }
},

// Question 79
{
  question: "A mother notices milky fluid coming from the breast of her newborn baby and becomes worried. The midwife explains that this is usually caused by:",
  options: {
    A: "Maternal hormones present in the baby’s blood.",
    B: "Complete withdrawal of maternal hormones from the baby’s blood.",
    C: "Imbalance between maternal and baby hormones."
  },
  correctAnswer: "A",
  rationaleCorrect: "Some newborns develop temporary breast swelling or milk-like discharge because maternal hormones cross the placenta during pregnancy and remain in the baby’s circulation for a short time after birth. This is usually harmless and resolves on its own.",
  rationalesIncorrect: {
    B: "Hormonal changes after birth may contribute, but the main explanation is the effect of maternal hormones that entered the baby’s body.",
    C: "This is not the best explanation. The condition is specifically due to maternal hormonal influence."
  }
},

// Question 80
{
  question: "A newly admitted patient refuses to use the ward water closet and asks for a chamber pot because she is not used to defaecating in a toilet bowl. The nurses laugh at her and insist that she must use it or “please herself.” How would you describe the nurses’ attitude?",
  options: {
    A: "Incompetent.",
    B: "Judgmental.",
    C: "Unprofessional."
  },
  correctAnswer: "B",
  rationaleCorrect: "The nurses judged the patient’s behaviour as strange instead of trying to understand her background, beliefs, habits, or previous toilet practices. A non-judgmental nurse should respect the patient’s dignity and provide education calmly.",
  rationalesIncorrect: {
    A: "Incompetence means lack of knowledge or skill to perform a duty. The main issue here is the nurses’ attitude toward the patient.",
    C: "Their behaviour is also unprofessional, but the best description among the options is judgmental because they looked down on the patient’s concern instead of helping her."
  }
},

// Question 81
{
  question: "A patient is uncomfortable using a water closet because she has never used one before. What would be the best nursing response? I. Allow her to defaecate in the bush to prevent constipation. II. Explain that the facility is a water closet, not an ordinary bowl. III. Reassure her that other patients use it safely. IV. Teach her how to use the water closet so she can relax.",
  options: {
    A: "II, III and IV.",
    B: "I and III.",
    C: "III and IV."
  },
  correctAnswer: "A",
  rationaleCorrect: "The nurse should educate and support the patient without shame. Explaining what the water closet is, reassuring her, and teaching her how to use it promote comfort, confidence, privacy, and dignity.",
  rationalesIncorrect: {
    B: "Allowing the patient to defaecate in the bush is unsafe, unhygienic, and inappropriate in a healthcare facility.",
    C: "Reassurance and teaching are helpful, but the nurse should also explain what the water closet is so the patient understands it better."
  }
},

// Question 82
{
  question: "A newly qualified nurse dresses a post-laparotomy wound using strict aseptic technique to prevent infection and promote healing. Which ethical principle is being demonstrated?",
  options: {
    A: "Fidelity.",
    B: "Justice.",
    C: "Beneficence."
  },
  correctAnswer: "C",
  rationaleCorrect: "Beneficence means doing good and acting in the patient’s best interest. Using aseptic technique protects the wound from contamination, prevents infection, and promotes recovery.",
  rationalesIncorrect: {
    A: "Fidelity means faithfulness, keeping promises, and being loyal to professional duties. The specific action here is aimed at promoting the patient’s wellbeing.",
    B: "Justice means fairness and equal treatment. Aseptic wound care is mainly about doing good and preventing infection, not fairness."
  }
},

// Question 83
{
  question: "A nurse mistakenly gives a patient the wrong dose of pethidine. If the patient seeks compensation for harm caused by this error, which source of law would most directly apply?",
  options: {
    A: "Criminal law.",
    B: "Administrative law.",
    C: "Civil law."
  },
  correctAnswer: "C",
  rationaleCorrect: "Civil law deals with disputes between individuals or organizations, including negligence and malpractice claims. Medication errors that harm a patient may result in civil action because the patient may seek compensation for injury caused by breach of duty.",
  rationalesIncorrect: {
    A: "Criminal law applies when an offence is committed against the state, such as intentional harm, gross negligence leading to death, or illegal acts. A simple medication error is more commonly handled under civil negligence unless it is extreme.",
    B: "Administrative law deals with rules, regulations, licensing, and disciplinary matters involving professional bodies or institutions. It may be involved later, but civil law best addresses patient compensation."
  }
},

// Question 84
{
  question: "A patient receives an incorrect dosage of pethidine because of a nurse’s mistake. The legal issue is most likely to be handled under:",
  options: {
    A: "Administrative law.",
    B: "Criminal law.",
    C: "Civil law."
  },
  correctAnswer: "C",
  rationaleCorrect: "Civil law is concerned with private rights and compensation. When a patient is harmed by a medication error, the patient may sue for negligence or malpractice.",
  rationalesIncorrect: {
    A: "Administrative law may involve professional discipline by a regulatory body, but it is not the main legal route for compensation.",
    B: "Criminal law may apply in cases of reckless or grossly negligent conduct, especially where death occurs, but ordinary malpractice claims are usually civil matters."
  }
},

// Question 85
{
  question: "A nurse believes a patient with chronic back pain should be referred to a surgeon immediately. The physician suggests physiotherapy first and agrees to review the patient later for referral if there is no improvement. The nurse accepts this plan. Which conflict resolution style is being used?",
  options: {
    A: "Compromising.",
    B: "Avoiding.",
    C: "Competing."
  },
  correctAnswer: "A",
  rationaleCorrect: "Compromising occurs when both parties adjust their positions to reach a workable agreement. The nurse did not fully get immediate surgical referral, and the physician agreed to reevaluate later. Both accepted a middle position.",
  rationalesIncorrect: {
    B: "Avoiding means refusing to address the conflict or delaying discussion. In this case, the issue was discussed and a plan was agreed upon.",
    C: "Competing means one person pushes their own position strongly at the expense of the other. Here, neither person completely dominated the decision."
  }
},

// Question 86
{
  question: "A nurse notices that a prescribed medication dose is unusually high and may be unsafe for the patient. What should the nurse do first?",
  options: {
    A: "Administer the medication as prescribed.",
    B: "Notify the prescriber.",
    C: "Refuse to administer the medication without discussion."
  },
  correctAnswer: "B",
  rationaleCorrect: "The nurse has a responsibility to question unclear or unsafe prescriptions before administration. The correct action is to contact the prescriber, clarify the order, and document the action taken.",
  rationalesIncorrect: {
    A: "Nurses should not blindly give a medication that appears unsafe.",
    C: "The nurse should not simply refuse without first clarifying the prescription and communicating with the prescriber."
  }
},

// Question 87
{
  question: "A nurse writes in the care plan: “The client will walk from the bed to the bathroom within 72 hours.” This statement is an example of a:",
  options: {
    A: "Medium-term goal.",
    B: "Short-term goal.",
    C: "Long-term goal."
  },
  correctAnswer: "B",
  rationaleCorrect: "A short-term goal is expected to be achieved within a short period, often hours to a few days. Since this goal is expected within 72 hours, it is short-term and measurable.",
  rationalesIncorrect: {
    A: "Medium-term goals usually take longer than a few days and are not the best description for a 72-hour target.",
    C: "Long-term goals are achieved over weeks, months, or by discharge and beyond, not within 72 hours."
  }
},

// Question 88
{
  question: "An elderly patient falls after admission because the nurse did not complete a fall risk assessment or put fall precautions in place. Which statement best describes the nurse’s action?",
  options: {
    A: "The nurse had the potential to foresee harm.",
    B: "The nurse provided care as her duty.",
    C: "The nurse breached her duty by failing to meet the standard of care."
  },
  correctAnswer: "C",
  rationaleCorrect: "A fall risk assessment is part of the expected standard of care for elderly patients. If the nurse fails to assess risk and the patient falls, the nurse may be considered to have breached the duty of care.",
  rationalesIncorrect: {
    A: "The harm may have been foreseeable, but this option does not fully describe the nurse’s failure to meet the required standard.",
    B: "Having a duty of care is only one part of negligence. The problem is that the nurse failed to carry out that duty properly."
  }
},

// Question 89
{
  question: "A nurse accidentally gives an overdose of a narcotic medication, and the patient dies as a result. What offence could the nurse be convicted of?",
  options: {
    A: "Manslaughter.",
    B: "Battery.",
    C: "Murder."
  },
  correctAnswer: "A",
  rationaleCorrect: "Manslaughter involves unlawful killing without the intention to kill. If a patient dies because of a serious medication error or gross negligence, the nurse may face a manslaughter charge depending on the circumstances.",
  rationalesIncorrect: {
    B: "Battery refers to unlawful physical contact or treatment without consent. It does not best describe accidental death from overdose.",
    C: "Murder involves intentional killing with malice or intent. In this case, the death resulted from an accidental overdose, not deliberate killing."
  }
},

// Question 90
{
  question: "A psychiatric patient has refused food, water, and prescribed medication for several days, saying she reacts badly to everything on the ward. What should the nurses do?",
  options: {
    A: "Ask relatives to discharge her or forcefully give injections.",
    B: "Continue therapeutic communication and encourage her to accept treatment.",
    C: "Ask the doctor to discharge her because she is not cooperating."
  },
  correctAnswer: "B",
  rationaleCorrect: "The nurse should use patience, therapeutic communication, reassurance, and repeated explanation to encourage cooperation. Refusal may be linked to fear, delusions, paranoia, or mistrust, so the nurse should build rapport and support the patient toward accepting care.",
  rationalesIncorrect: {
    A: "Force should not be used unless there is legal authority, emergency risk, and proper clinical justification. Discharging her because she is difficult would be unsafe.",
    C: "Non-cooperation is often part of psychiatric illness. The care team should manage the behaviour therapeutically, not abandon care."
  }
},

// Question 91
{
  question: "A nurse manager wants to improve communication in a large primary care clinic. Which approach would be most useful?",
  options: {
    A: "Understand the organizational culture and align communication with the goals of the organization.",
    B: "Motivate staff by giving mainly negative feedback.",
    C: "Use only one communication style in every situation."
  },
  correctAnswer: "A",
  rationaleCorrect: "Effective communication depends on understanding how the organization works, including its values, structure, routines, and goals. When communication fits the organizational culture, staff are more likely to understand expectations, collaborate, and work toward common objectives.",
  rationalesIncorrect: {
    B: "Negative feedback alone can reduce morale, create fear, and damage teamwork. Constructive feedback is more effective.",
    C: "Communication should be adapted to the person, setting, urgency, and message. One style does not fit every situation."
  }
},

// Question 92
{
  question: "A senior nurse supports a newly qualified nurse by guiding, encouraging, and demonstrating professional behaviour. In this mentoring role, the senior nurse is mainly:",
  options: {
    A: "Serving as a role model.",
    B: "Establishing a new nurse role.",
    C: "Joining a group that promotes accessible healthcare."
  },
  correctAnswer: "A",
  rationaleCorrect: "A mentor supports the growth of a less experienced nurse by teaching, guiding, encouraging, and modelling professional behaviour. The mentee learns through instruction and by observing the mentor’s attitude, communication, clinical judgement, and ethical conduct.",
  rationalesIncorrect: {
    B: "Mentoring does not necessarily create a new role; it supports professional development within existing roles.",
    C: "This describes advocacy or professional association activity, not the direct role of a mentor."
  }
},

// Question 93
{
  question: "During resuscitation, a physician calls for the wrong medication. The nurse recognizes the error, refuses to give it, and provides the correct emergency medication instead. Which role is the nurse performing?",
  options: {
    A: "Advocacy.",
    B: "Independent practice.",
    C: "Change agent."
  },
  correctAnswer: "A",
  rationaleCorrect: "Advocacy means protecting the patient’s safety, rights, and wellbeing. By refusing to administer the wrong medication and ensuring the correct drug is used, the nurse is acting in the patient’s best interest.",
  rationalesIncorrect: {
    B: "Nurses have independent roles, but this scenario is mainly about protecting the patient from a medication error.",
    C: "A change agent helps improve systems, policies, or practices over time. This situation is an immediate patient safety action."
  }
},

// Question 94
{
  question: "A nurse hears a staff member tell a patient, “If you do not take your oral medication, we will not give you food.” How should this behaviour be reported?",
  options: {
    A: "Assault.",
    B: "Battery.",
    C: "Malpractice."
  },
  correctAnswer: "A",
  rationaleCorrect: "Assault involves a threat or action that makes a person fear harm or coercion. Threatening to withhold food if the patient refuses medication is coercive and abusive.",
  rationalesIncorrect: {
    B: "Battery involves physical contact or treatment without consent. In this scenario, the staff member made a threat but did not touch the patient.",
    C: "Malpractice refers to professional negligence that causes harm. The immediate legal issue in the statement is assault through threat and coercion."
  }
},
// Question 95
{
  question: "A nurse meets a friend outside the hospital. The friend asks why her neighbour is on admission. The nurse falsely says, “She has a sexually transmitted infection,” even though the patient was admitted with malaria. This statement is best described as:",
  options: {
    A: "Libel.",
    B: "Assault.",
    C: "Slander."
  },
  correctAnswer: "C",
  rationaleCorrect: "Slander is a false spoken statement that can damage another person’s reputation. In this case, the nurse verbally gave false information about the patient’s diagnosis, and the statement could harm the patient socially and emotionally.",
  rationalesIncorrect: {
    A: "Libel refers to false written or published statements, not spoken words.",
    B: "Assault involves threatening someone or making the person fear harm. The nurse’s action is not a threat but a false spoken statement."
  }
},

// Question 96
{
  question: "A child welfare clinic records poor attendance even though the service is available in the community. Which factors may explain the low coverage? I. Lack of transportation. II. Poor community participation and involvement. III. Cost of services. IV. Mothers having less decision-making power.",
  options: {
    A: "I, II, III and IV.",
    B: "II and IV.",
    C: "I, II and IV."
  },
  correctAnswer: "A",
  rationaleCorrect: "Low attendance at child welfare clinics may result from several barriers. Lack of transportation can prevent mothers from reaching the clinic, poor community involvement can reduce awareness and motivation, cost may discourage attendance, and some mothers may have limited decision-making power in the family.",
  rationalesIncorrect: {
    B: "Poor community participation and low decision-making power are important, but this option leaves out transport and cost barriers.",
    C: "Lack of transport, poor community participation, and low decision-making power are relevant, but the option is incomplete because cost can also reduce clinic attendance."
  }
},

// Question 97
{
  question: "A nurse is preparing the ward to receive newly admitted patients. Which of the following is least relevant when preparing for admission?",
  options: {
    A: "The nurse coming on duty.",
    B: "The number of patients at the OPD.",
    C: "The number of beds in the ward."
  },
  correctAnswer: "A",
  rationaleCorrect: "When preparing the ward for admissions, the nurse should consider bed availability, equipment, supplies, and the expected number of patients who may be admitted from the OPD or emergency unit. The identity of the nurse coming on duty is not the main factor in preparing bed space and ward readiness.",
  rationalesIncorrect: {
    B: "The number of patients at the OPD is relevant because some OPD patients may be admitted, so the ward should prepare for possible admissions.",
    C: "The number of beds in the ward is very important because bed availability determines whether new patients can be accommodated."
  }
},

// Question 98
{
  question: "A client reports a nurse-midwife to the nurse-manager because the nurse-midwife spoke rudely to her during care. Which aspect of the nurse-midwife’s behaviour needs improvement?",
  options: {
    A: "Attitude.",
    B: "Knowledge.",
    C: "Competence."
  },
  correctAnswer: "A",
  rationaleCorrect: "Rudeness reflects a poor attitude toward the client. A nurse may have knowledge and technical skills, but poor attitude can damage trust, reduce patient satisfaction, and make the client feel disrespected.",
  rationalesIncorrect: {
    B: "Knowledge refers to what the nurse knows. The issue here is not lack of information, but poor interpersonal behaviour.",
    C: "Competence refers to the ability to perform duties safely and effectively. The problem described is mainly the nurse’s manner of relating to the client."
  }
},

// Question 99
{
  question: "A nurse-midwife wants to delegate a patient care activity to another staff member. What must she ensure before delegating the task?",
  options: {
    A: "The task should be delegated whenever the nurse-midwife is busy.",
    B: "The staff should decide for themselves what can be delegated.",
    C: "The person receiving the task must have the required knowledge and ability."
  },
  correctAnswer: "C",
  rationaleCorrect: "Safe delegation requires the nurse-midwife to ensure that the person assigned the task has the knowledge, skill, experience, and authority to perform it safely. The nurse remains accountable for the decision to delegate.",
  rationalesIncorrect: {
    A: "Delegation should not be based only on convenience. Patient safety and staff competence must come first.",
    B: "The staff should not decide for themselves what can be delegated. The nurse-midwife must use professional judgement and consider scope of practice."
  }
},

// Question 100
{
  question: "A nurse-midwife writes false statements about a patient or co-worker in a document or report. What legal action may the nurse-midwife face?",
  options: {
    A: "Slander.",
    B: "Libel.",
    C: "Negligence."
  },
  correctAnswer: "B",
  rationaleCorrect: "Libel is a false written or published statement that damages another person’s reputation. Since the false statement is written, the nurse-midwife may be sued for libel.",
  rationalesIncorrect: {
    A: "Slander refers to false spoken statements, not written ones.",
    C: "Negligence is failure to provide expected care, resulting in harm. It does not specifically describe false written statements."
  }
},

// Question 101
{
  question: "A one-year-old child treated for dysentery is ready for discharge. Which health education is most important for the mother?",
  options: {
    A: "Start antidiarrhoeal medication before bringing the child to hospital.",
    B: "Maintain good hygiene to prevent faeco-oral spread.",
    C: "Stop all oral intake for 8 hours once diarrhoea starts."
  },
  correctAnswer: "B",
  rationaleCorrect: "Dysentery is commonly spread through contaminated hands, food, water, and surfaces. Teaching the mother about handwashing, safe disposal of faeces, clean water, and food hygiene is essential to prevent reinfection and spread to others.",
  rationalesIncorrect: {
    A: "Antidiarrhoeal medicines are not the priority and may be unsafe in young children, especially when there is dysentery.",
    C: "Stopping all oral intake is dangerous because diarrhoea can quickly cause dehydration. The child should continue fluids and feeding as advised."
  }
},

// Question 102
{
  question: "A parent beats a child and later says, “I did it for your own good.” Which defence mechanism is the parent using?",
  options: {
    A: "Denial.",
    B: "Projection.",
    C: "Rationalization."
  },
  correctAnswer: "C",
  rationaleCorrect: "Rationalization occurs when a person gives a socially acceptable or seemingly logical explanation for behaviour that may actually be unacceptable. The parent is justifying the punishment by saying it was for the child’s benefit.",
  rationalesIncorrect: {
    A: "Denial means refusing to accept reality. The parent is not denying that the punishment occurred.",
    B: "Projection means attributing one’s own feelings or faults to another person. The parent is not blaming the child for the parent’s own feelings."
  }
},

// Question 103
{
  question: "A patient is scheduled for carotid angiogram and stent placement. His spouse tells the nurse not to mention stroke as a possible risk because the patient may refuse to sign the consent. What should the nurse do?",
  options: {
    A: "Reassure the spouse that the risk of stroke is minimal.",
    B: "Give emotional support and emphasize only the benefits of the procedure.",
    C: "Assess the patient’s understanding of the risks, benefits, and alternatives."
  },
  correctAnswer: "C",
  rationaleCorrect: "Informed consent requires that the patient understands the procedure, its risks, benefits, and alternatives. The nurse must protect the patient’s right to make an informed decision. Hiding a serious risk such as stroke would be unethical and could invalidate consent.",
  rationalesIncorrect: {
    A: "This ignores the patient’s right to know relevant risks before making a decision.",
    B: "Support is important, but giving only positive information is misleading and does not support informed consent."
  }
},

// Question 104
{
  question: "A newly admitted patient refuses to use the ward water closet and asks to use the nearby bush because she believes she “cannot defaecate in a bowl.” What is most likely influencing her behaviour?",
  options: {
    A: "Ignorance.",
    B: "Attitude.",
    C: "Poverty."
  },
  correctAnswer: "A",
  rationaleCorrect: "The patient may not understand what a water closet is or may not have used one before. Her behaviour is likely due to lack of knowledge or unfamiliarity, not intentional stubbornness. The nurse should teach her calmly and respectfully.",
  rationalesIncorrect: {
    B: "The patient’s behaviour is not necessarily due to a bad attitude; she may simply be unfamiliar with the facility.",
    C: "Poverty may influence exposure to certain facilities, but the immediate issue is lack of understanding or experience with the water closet."
  }
},

// Question 105
{
  question: "A patient dies after a nurse administers the wrong medication because the nurse failed to follow instructions and carry out orders correctly. This may result in charges of:",
  options: {
    A: "Negligence.",
    B: "Assault.",
    C: "Malpractice."
  },
  correctAnswer: "C",
  rationaleCorrect: "Malpractice is professional negligence. It occurs when a trained professional fails to meet the expected standard of care, and the patient is harmed as a result. Giving the wrong medication is a serious breach of nursing responsibility and may lead to malpractice charges.",
  rationalesIncorrect: {
    A: "Negligence is closely related, but malpractice is the more specific term when the negligent act is committed by a professional in the course of duty.",
    B: "Assault involves threatening a patient or making the patient fear harm. It does not describe a medication error."
  }
},

// Question 106
{
  question: "A patient has poor appetite and eats only very small amounts at mealtimes. What should the nurse provide?",
  options: {
    A: "Snacks between meals.",
    B: "Small portions of food more frequently.",
    C: "Supplementary vitamins only."
  },
  correctAnswer: "B",
  rationaleCorrect: "Patients with poor appetite often tolerate small, frequent meals better than large meals. This approach increases total food intake gradually without overwhelming the patient.",
  rationalesIncorrect: {
    A: "Snacks may help, but the best approach is a structured plan of small, frequent meals.",
    C: "Supplementary vitamins do not replace adequate nutrition and calories. The patient still needs food intake."
  }
},

// Question 107
{
  question: "A post-operative patient is receiving intravenous fluids. Which observations should the nurse make to detect or prevent fluid overload? I. Assess skin and mucous membranes for hydration status. II. Check blood urea/electrolytes and creatinine only. III. Monitor fluid intake and output. IV. Monitor vital signs.",
  options: {
    A: "I, III and IV.",
    B: "I, II and III.",
    C: "II, III and IV."
  },
  correctAnswer: "A",
  rationaleCorrect: "To prevent fluid overload, the nurse should assess hydration status, monitor intake and output, and observe vital signs such as pulse, blood pressure, and respiratory rate. Fluid overload may present with raised blood pressure, fast breathing, oedema, crackles in the lungs, or reduced oxygenation.",
  rationalesIncorrect: {
    B: "Laboratory values may be useful, but routine bedside prevention of fluid overload depends more directly on hydration assessment, intake and output, and vital signs.",
    C: "Intake and output and vital signs are correct, but this option leaves out direct physical assessment of hydration status."
  }
},

// Question 108
{
  question: "A patient cannot understand the meaning of available choices, goals, risks, or expected outcomes of a planned procedure. The nurse would be right to say that the patient lacks:",
  options: {
    A: "Beneficence.",
    B: "Autonomy.",
    C: "Veracity."
  },
  correctAnswer: "B",
  rationaleCorrect: "Autonomy involves the patient’s ability and right to make informed decisions about their own care. If the patient cannot understand choices, goals, and outcomes, their decision-making capacity is impaired, and they cannot fully exercise autonomy.",
  rationalesIncorrect: {
    A: "Beneficence means doing good for the patient. It does not describe the patient’s ability to make decisions.",
    C: "Veracity means truthfulness. The problem here is not truth-telling, but the patient’s inability to understand and choose."
  }
},

// Question 109
{
  question: "A woman booked for myomectomy receives education about the procedure and signs the consent form. Which ethical principle is she exercising?",
  options: {
    A: "Veracity.",
    B: "Autonomy.",
    C: "Beneficence."
  },
  correctAnswer: "B",
  rationaleCorrect: "Autonomy means the patient has the right to make decisions about her own body and healthcare. By signing the consent form after receiving information, the patient is exercising her right to choose.",
  rationalesIncorrect: {
    A: "Veracity means telling the truth. The nurse and doctor must practise veracity when explaining the procedure, but the patient’s decision reflects autonomy.",
    C: "Beneficence means doing good for the patient. It is not the principle being exercised by the patient when making a choice."
  }
},

// Question 110
{
  question: "On the day of surgery, a patient is asked to sign a consent form after receiving information about the operation. By making a decision about her health, she is using the principle of:",
  options: {
    A: "Beneficence.",
    B: "Veracity.",
    C: "Autonomy."
  },
  correctAnswer: "C",
  rationaleCorrect: "Autonomy is the patient’s right to make voluntary decisions about healthcare. Signing consent shows that the patient is choosing whether to accept or refuse the proposed treatment.",
  rationalesIncorrect: {
    A: "Beneficence refers to actions done to benefit the patient, usually by the healthcare provider.",
    B: "Veracity refers to truthfulness. It is important during consent, but the patient’s act of choosing is autonomy."
  }
},

// Question 111
{
  question: "A patient is found reading through his own clinical notes, and the nurse rebukes him. Which patient right is being violated?",
  options: {
    A: "Right to confidentiality.",
    B: "Right to reasonable care.",
    C: "Right to information."
  },
  correctAnswer: "C",
  rationaleCorrect: "Patients have the right to receive information about their health condition, care, treatment, and progress. Rebuking the patient for trying to understand his own notes may interfere with his right to information and participation in care.",
  rationalesIncorrect: {
    A: "Confidentiality protects the patient’s information from unauthorized people. The patient accessing his own information is not a breach of confidentiality.",
    B: "Reasonable care means receiving appropriate and safe care. The main issue here is access to information."
  }
},

// Question 112
{
  question: "A patient is being assisted with range-of-motion exercises. Which of the following is not a recognized body movement produced by muscle contraction?",
  options: {
    A: "Circumflexion.",
    B: "Protraction.",
    C: "Circumduction."
  },
  correctAnswer: "A",
  rationaleCorrect: "Circumflexion is not a standard term used to describe body movement in range-of-motion exercises. Common movements include flexion, extension, abduction, adduction, rotation, protraction, retraction, and circumduction.",
  rationalesIncorrect: {
    B: "Protraction is a real movement where a body part moves forward, such as moving the jaw or shoulders forward.",
    C: "Circumduction is a real movement where a limb moves in a circular pattern, combining flexion, extension, abduction, and adduction."
  }
},

// Question 113
{
  question: "A patient is ready for discharge but cannot pay the hospital bill. Which member of the health team should be consulted?",
  options: {
    A: "Social worker.",
    B: "Hospital matron.",
    C: "Speech therapist."
  },
  correctAnswer: "A",
  rationaleCorrect: "A social worker helps patients and families with social, financial, and practical challenges that affect healthcare. The social worker can assess the patient’s financial situation, link the patient to available support, and help with discharge planning.",
  rationalesIncorrect: {
    B: "The hospital matron may provide nursing leadership, but financial and social support issues are best handled by the social worker.",
    C: "A speech therapist helps patients with speech, swallowing, and communication problems, not hospital bill issues."
  }
},

// Question 114
{
  question: "A patient is unable to make decisions, but the nurse finds a legal document stating what care the patient wants if she loses decision-making ability. This document is called:",
  options: {
    A: "Power of attorney.",
    B: "Do-not-resuscitate order.",
    C: "Advance directive."
  },
  correctAnswer: "C",
  rationaleCorrect: "An advance directive is a legal document that states a person’s healthcare wishes in advance, especially for situations where the person may later become unable to communicate or decide. It guides the healthcare team and family in making care decisions.",
  rationalesIncorrect: {
    A: "Power of attorney gives another person legal authority to make decisions, but it is not the same as a document stating the patient’s specific treatment wishes.",
    B: "A do-not-resuscitate order is specific to not starting CPR if the heart or breathing stops. An advance directive is broader."
  }
},

// Question 115
{
  question: "A few hours after returning from theatre, a post-operative patient begins bleeding from the incision site. What is the best action for the nurse to take?",
  options: {
    A: "Check vital signs.",
    B: "Call the doctor or surgeon.",
    C: "Reinforce the dressing."
  },
  correctAnswer: "B",
  rationaleCorrect: "Bleeding from a surgical incision shortly after surgery may indicate post-operative haemorrhage and should be reported urgently. The surgeon may need to review the patient quickly to determine whether further intervention is needed.",
  rationalesIncorrect: {
    A: "Vital signs are very important, but they should not delay notifying the surgeon when active post-operative bleeding is present.",
    C: "Reinforcing the dressing may help temporarily, but it does not address the cause of bleeding and should not replace urgent reporting."
  }
},

// Question 116
{
  question: "A patient refuses morning medication. The nurse threatens to force the patient’s mouth open and administer the drug. This threat may amount to:",
  options: {
    A: "Slander.",
    B: "Battery.",
    C: "Assault."
  },
  correctAnswer: "C",
  rationaleCorrect: "Assault occurs when a person is threatened in a way that creates fear of unwanted contact or harm. The nurse has not yet touched the patient, but threatening to force medication into the patient’s mouth is assault.",
  rationalesIncorrect: {
    A: "Slander means making a false spoken statement that damages someone’s reputation.",
    B: "Battery would occur if the nurse actually touched the patient or forced the medication without consent."
  }
},

// Question 117
{
  question: "A patient reports to the emergency unit with urinary retention. The nurse reasons that catheterization will relieve the patient’s discomfort and solve the problem. This reasoning is based on which ethical theory?",
  options: {
    A: "Teleology.",
    B: "Deontology.",
    C: "Paternalism."
  },
  correctAnswer: "A",
  rationaleCorrect: "Teleology focuses on the outcome or consequence of an action. The nurse is considering catheterization because it will produce a beneficial result: relief of urinary retention and discomfort.",
  rationalesIncorrect: {
    B: "Deontology focuses on duty, rules, and moral obligations rather than the outcome alone.",
    C: "Paternalism occurs when a healthcare worker makes decisions for a patient, believing it is for the patient’s good, sometimes without respecting the patient’s choice."
  }
},

// Question 118
{
  question: "A patient is most likely to develop trust in a nurse when the nurse demonstrates:",
  options: {
    A: "Intelligence.",
    B: "Friendliness.",
    C: "Consistency."
  },
  correctAnswer: "C",
  rationaleCorrect: "Consistency helps patients feel safe because they know what to expect from the nurse. When a nurse is reliable, keeps promises, follows routines, and behaves predictably, the patient is more likely to build trust.",
  rationalesIncorrect: {
    A: "Knowledge is important, but a patient may not trust a nurse who is knowledgeable but unreliable or inconsistent.",
    B: "Friendliness helps rapport, but trust is built more strongly through consistent, dependable behaviour."
  }
},

// Question 119
{
  question: "A patient undergoing surgery under general anaesthesia is at risk of deep vein thrombosis. Which factors may contribute to this risk? I. Dehydration. II. Pressure on the calf muscles. III. Immobility. IV. Varicose veins.",
  options: {
    A: "I, II and III.",
    B: "I, II and IV.",
    C: "II, III and IV."
  },
  correctAnswer: "A",
  rationaleCorrect: "During and after surgery, dehydration can increase blood viscosity, immobility slows venous return, and pressure on the calf muscles can impair circulation. These factors promote venous stasis and clot formation, increasing the risk of deep vein thrombosis.",
  rationalesIncorrect: {
    B: "Dehydration and calf pressure are relevant, but this option leaves out immobility, which is one of the most important perioperative risk factors.",
    C: "Pressure and immobility are relevant, but this option leaves out dehydration, which can also increase clotting risk."
  }
},

// Question 120
{
  question: "A post-operative patient is instructed to take antibiotics and return daily for wound dressing but fails to follow the instructions. She later returns with an infected wound. Her behaviour is best described as:",
  options: {
    A: "Beneficence.",
    B: "Non-compliance.",
    C: "Maleficence."
  },
  correctAnswer: "B",
  rationaleCorrect: "Non-compliance means failure or refusal to follow prescribed treatment, advice, or instructions. In this case, the patient did not follow medication and wound care instructions, which contributed to wound infection.",
  rationalesIncorrect: {
    A: "Beneficence means doing good or acting in someone’s best interest. The patient’s behaviour did not promote healing.",
    C: "Maleficence means intentionally causing harm. The patient may not have intended harm, but she failed to comply with care instructions."
  }
},

// Question 121
{
  question: "A patient is asked his name and replies, “Kofi.” When asked his age, address, and other questions, he continues to answer, “Kofi.” Which behaviour is this?",
  options: {
    A: "Perseveration.",
    B: "Circumstantiality.",
    C: "Echolalia."
  },
  correctAnswer: "A",
  rationaleCorrect: "Perseveration is the persistent repetition of the same word, idea, or response even when the question or topic changes. The patient continues saying “Kofi” despite being asked different questions.",
  rationalesIncorrect: {
    B: "Circumstantiality means giving excessive unnecessary details before eventually answering the question.",
    C: "Echolalia means repeating another person’s words or phrases, like an echo."
  }
},

// Question 122
{
  question: "An unconscious patient is brought to the emergency unit by relatives. Examination shows absent reflexes, and the doctor declares the patient clinically dead shortly after arrival. Why is this likely to be a coroner’s case? I. The patient was already dead on arrival. II. The patient was brought in a commercial vehicle. III. The patient had been in the hospital for less than 24 hours. IV. The patient was rushed in by relatives.",
  options: {
    A: "I and II.",
    B: "I and IV.",
    C: "I and III."
  },
  correctAnswer: "C",
  rationaleCorrect: "A death may become a coroner’s case when the patient is brought in dead or dies shortly after arrival, especially within 24 hours of admission. Such cases may require official investigation to determine the cause and circumstances of death.",
  rationalesIncorrect: {
    A: "Being dead on arrival is relevant, but being brought in a commercial vehicle is not the key reason.",
    B: "Being brought by relatives does not by itself make the death a coroner’s case."
  }
},

// Question 123
{
  question: "A patient refuses to sleep in the ward and says, “I can smell the odour of people who died there.” This is an example of which type of hallucination?",
  options: {
    A: "Kinesthetic.",
    B: "Gustatory.",
    C: "Olfactory."
  },
  correctAnswer: "C",
  rationaleCorrect: "Olfactory hallucination involves perceiving smells that are not actually present. The patient believes he can smell dead people in the ward, even though there may be no such odour.",
  rationalesIncorrect: {
    A: "Kinesthetic hallucination involves false sensations of body movement or position.",
    B: "Gustatory hallucination involves false taste sensations, not smell."
  }
},

// Question 124
{
  question: "A patient repeatedly violates laws, disregards the rights of others, and often gets into trouble with authorities. Which personality disorder is most likely?",
  options: {
    A: "Antisocial.",
    B: "Borderline.",
    C: "Narcissistic."
  },
  correctAnswer: "A",
  rationaleCorrect: "Antisocial personality disorder is characterized by repeated violation of social rules and laws, lack of remorse, deceitfulness, irresponsibility, and disregard for the rights of others. Such individuals commonly get into legal trouble.",
  rationalesIncorrect: {
    B: "Borderline personality disorder is associated with unstable relationships, fear of abandonment, impulsivity, and emotional instability, not primarily repeated criminal behaviour.",
    C: "Narcissistic personality disorder involves grandiosity, need for admiration, and lack of empathy, but legal trouble is more typical of antisocial personality disorder."
  }
},

// Question 125
{
  question: "A patient receiving general anaesthesia passes through different stages. At which stage is surgery performed?",
  options: {
    A: "Medullary depression stage.",
    B: "Excitement stage.",
    C: "Surgical anaesthesia stage."
  },
  correctAnswer: "C",
  rationaleCorrect: "Surgery is performed during the surgical anaesthesia stage because the patient is unconscious, has adequate muscle relaxation, and does not respond to painful stimuli. This stage provides the proper depth of anaesthesia for surgical procedures.",
  rationalesIncorrect: {
    A: "Medullary depression stage is dangerous because vital centres controlling breathing and circulation may be depressed. It is an emergency, not a surgical stage.",
    B: "During the excitement stage, the patient may have irregular breathing, movement, vomiting, or struggling. Surgery should not be performed during this stage."
  }
},

// Question 126
{
  question: "A woman with early cervical cancer is most likely to come to the hospital when she notices:",
  options: {
    A: "Roughness of the cervix when touched.",
    B: "Foul-smelling vaginal discharge.",
    C: "Bloody spotting after intercourse."
  },
  correctAnswer: "C",
  rationaleCorrect: "Postcoital bleeding is a common warning sign of cervical cancer. The cervix may bleed easily after sexual intercourse because abnormal cervical tissue is fragile and vascular.",
  rationalesIncorrect: {
    A: "The patient would not usually detect roughness of the cervix herself; it is more likely to be noticed during pelvic examination.",
    B: "Foul-smelling vaginal discharge may occur in advanced cervical cancer or infection, but postcoital bleeding is a more classic early symptom."
  }
},

// Question 127
{
  question: "A patient with gallstones complains of pain after eating fatty foods. This happens mainly because:",
  options: {
    A: "There is inadequate closure of the ampulla of Vater.",
    B: "Bile flow into the intestine is obstructed.",
    C: "The liver is producing inadequate bile."
  },
  correctAnswer: "B",
  rationaleCorrect: "Fatty foods stimulate the gallbladder to contract and release bile into the intestine for fat digestion. When gallstones obstruct bile flow, gallbladder contraction causes pain, especially after fatty meals.",
  rationalesIncorrect: {
    A: "The problem is obstruction to bile flow, not failure of closure of the ampulla of Vater.",
    C: "In cholelithiasis, the liver may still produce bile. The issue is that gallstones block or interfere with bile drainage."
  }
},

// Question 128
{
  question: "A patient with diabetes says, “I do not like big meals; I prefer eating snacks throughout the day.” What should the nurse explain?",
  options: {
    A: "Large meals mainly cause weight problems.",
    B: "Salt and sugar restriction is the main concern.",
    C: "Regulated food intake is basic to diabetic control."
  },
  correctAnswer: "C",
  rationaleCorrect: "Diabetes control depends on regular, balanced food intake that matches medication, insulin, and activity level. Eating randomly throughout the day can cause unstable blood glucose levels. The patient should be taught meal planning, portion control, and timing of meals and snacks.",
  rationalesIncorrect: {
    A: "Large meals may contribute to weight gain, but the main diabetic concern is blood glucose control.",
    B: "Sugar control is important, but diabetic nutrition is broader than simply avoiding sugar and salt. It involves meal timing, carbohydrates, calories, and balanced nutrients."
  }
},

// Question 129
{
  question: "A patient with diabetes mellitus has ketones detected in the urine during routine testing. This finding is more common in which type of diabetes?",
  options: {
    A: "Type II.",
    B: "Gestational.",
    C: "Type I."
  },
  correctAnswer: "C",
  rationaleCorrect: "Ketones in urine are more common in Type I diabetes because there is little or no insulin production. Without enough insulin, the body cannot use glucose effectively for energy and begins breaking down fat, producing ketones. This can lead to diabetic ketoacidosis if not treated.",
  rationalesIncorrect: {
    A: "Ketones can occur in severe illness or uncontrolled Type II diabetes, but they are more commonly associated with Type I diabetes.",
    B: "Gestational diabetes may affect pregnancy outcomes, but ketonuria is not most commonly associated with it compared with Type I diabetes."
  }
},
// Question 130
{
  question: "A patient complains that the eyes feel gritty, irritated, and as if sand is inside them. Which symptom is most commonly associated with dry eye syndrome?",
  options: {
    A: "Difficulty moving the lids.",
    B: "Excess mucous secretion.",
    C: "Scratchy or foreign body sensation."
  },
  correctAnswer: "C",
  rationaleCorrect: "Dry eye syndrome occurs when the eyes do not produce enough tears or when tears evaporate too quickly. This causes irritation, burning, grittiness, and the feeling that something is inside the eye.",
  rationalesIncorrect: {
    A: "Difficulty moving the lids is not a typical symptom of dry eye syndrome. It may suggest swelling, nerve problems, or mechanical issues.",
    B: "Dry eyes may sometimes cause stringy mucus, but the most typical complaint is dryness, irritation, or foreign body sensation."
  }
},

// Question 131
{
  question: "A patient with spinal injury is lying flat on the back for a long period. Which pressure points are most at risk of developing pressure sores?",
  options: {
    A: "Forehead, sternum, patella and toes.",
    B: "Ears, sternum, sacrum and heels.",
    C: "Occiput, scapula, sacrum and heels."
  },
  correctAnswer: "C",
  rationaleCorrect: "In the supine position, the occiput, scapulae, sacrum, elbows, and heels are common pressure areas. These bony prominences have little soft tissue protection, so prolonged pressure can reduce blood supply and cause tissue breakdown.",
  rationalesIncorrect: {
    A: "The forehead, sternum, patella, and toes are more exposed to pressure when a patient lies prone, not supine.",
    B: "The sacrum and heels are correct, but the sternum is not a major pressure point in the supine position."
  }
},

// Question 132
{
  question: "A terminally ill patient with prostate cancer asks the nurse, “How long do I have to live?” The nurse avoids answering because she feels uncomfortable. Which ethical principle is being violated?",
  options: {
    A: "Beneficence.",
    B: "Veracity.",
    C: "Non-maleficence."
  },
  correctAnswer: "B",
  rationaleCorrect: "Veracity means truthfulness. Patients have the right to honest information about their condition, prognosis, and care. The nurse should respond truthfully and sensitively within her professional scope, while involving the doctor or palliative care team where necessary.",
  rationalesIncorrect: {
    A: "Beneficence means doing good for the patient. Although honesty may benefit the patient, the specific principle involved here is truthfulness.",
    C: "Non-maleficence means avoiding harm. The issue here is not directly about causing harm, but about withholding truthful communication."
  }
},

// Question 133
{
  question: "A patient’s relative overhears nurses discussing the patient’s health condition with a friend in the nurses’ room. Which ethical principle has been violated?",
  options: {
    A: "Maleficence.",
    B: "Confidentiality.",
    C: "Veracity."
  },
  correctAnswer: "B",
  rationaleCorrect: "Confidentiality means protecting a patient’s private information from unauthorized persons. Discussing a patient’s condition where others can overhear, or with someone not involved in the patient’s care, is a breach of confidentiality.",
  rationalesIncorrect: {
    A: "Maleficence means doing harm. A breach of confidentiality may harm the patient, but the ethical principle directly violated is confidentiality.",
    C: "Veracity means truthfulness. The problem is not whether the nurses were truthful, but that they disclosed private information."
  }
},

// Question 134
{
  question: "A nurse forgets to remove a tourniquet after setting an infusion, and the patient later loses the affected hand. The nurse is most liable for:",
  options: {
    A: "Malpractice.",
    B: "Negligence.",
    C: "Assault."
  },
  correctAnswer: "A",
  rationaleCorrect: "Malpractice is professional negligence committed by a trained healthcare worker. Leaving a tourniquet in place after a procedure is a serious breach of professional duty, and if it results in amputation, the nurse may be liable for malpractice.",
  rationalesIncorrect: {
    B: "Negligence means failure to exercise reasonable care. This applies, but because the failure occurred in professional nursing practice, malpractice is the more specific answer.",
    C: "Assault involves threatening a patient or making the patient fear harm. This case is about unsafe professional care, not a threat."
  }
},

// Question 135
{
  question: "A man repeatedly breaks laws, disregards the rights of others, and shows little remorse for his actions. Which feature is most typical of antisocial personality disorder?",
  options: {
    A: "Being perceived as wicked.",
    B: "Refusing to associate with people.",
    C: "Exhibiting disregard for the law."
  },
  correctAnswer: "C",
  rationaleCorrect: "Antisocial personality disorder is characterized by repeated violation of rules, laws, and the rights of others. Such individuals may be deceitful, irresponsible, aggressive, and show little remorse.",
  rationalesIncorrect: {
    A: "Being perceived as wicked is a judgmental description, not a clinical feature.",
    B: "Refusing to associate with people is not the main feature of antisocial personality disorder."
  }
},
// Question 143
{
  question: "A client in an acute manic state is restless, overactive, and making unsafe decisions without thinking. What should be the nurse’s priority?",
  options: {
    A: "Protect the client from impulsive behaviour.",
    B: "Discourage the client’s use of vulgar language.",
    C: "Maintain the client’s contact with his or her family."
  },
  correctAnswer: "A",
  rationaleCorrect: "In mania, the client may become impulsive, restless, overconfident, and unable to judge danger properly. The first priority is safety. The nurse should reduce environmental stimulation, set limits calmly, supervise closely, and prevent harm.",
  rationalesIncorrect: {
    B: "Vulgar language may be addressed later through calm limit-setting, but safety comes first.",
    C: "Family support is useful, but it is not the immediate priority when the client is impulsive and unsafe."
  }
},

// Question 144
{
  question: "A nurse is faced with a situation where two choices are available, but both choices have unfavourable consequences. This situation is called:",
  options: {
    A: "Ethical dilemma.",
    B: "Spiritual dilemma.",
    C: "Ethical principle."
  },
  correctAnswer: "A",
  rationaleCorrect: "An ethical dilemma occurs when a person must choose between two or more difficult options, and each option has moral consequences. In healthcare, ethical dilemmas may involve conflict between patient rights, safety, truth-telling, confidentiality, or family wishes.",
  rationalesIncorrect: {
    B: "A spiritual dilemma refers to conflict involving religious or spiritual beliefs, not necessarily ethical decision-making.",
    C: "Ethical principles are values such as autonomy, beneficence, non-maleficence, justice, and veracity. They guide decisions, but they are not the dilemma itself."
  }
},

// Question 145
{
  question: "A Rhesus-negative woman married to a Rhesus-positive man has just delivered her second baby. Which injection might she have received during pregnancy or after delivery to prevent Rh sensitization?",
  options: {
    A: "Vitamin K.",
    B: "RhoGAM immunoglobulin.",
    C: "Tetanus toxoid."
  },
  correctAnswer: "B",
  rationaleCorrect: "RhoGAM, also called anti-D immunoglobulin, is given to Rh-negative mothers to prevent them from developing antibodies against Rh-positive foetal red blood cells. This helps prevent haemolytic disease in future pregnancies.",
  rationalesIncorrect: {
    A: "Vitamin K is given to newborns to prevent bleeding disease. It does not prevent Rh sensitization in the mother.",
    C: "Tetanus toxoid protects the mother and baby against tetanus, but it does not prevent Rh incompatibility."
  }
},

// Question 146
{
  question: "A patient with schizophrenia is also diagnosed with cancer. The physician prescribes chemotherapy and radiotherapy to prevent complications and prolong life. Which ethical principle best explains this action?",
  options: {
    A: "Justice.",
    B: "Non-maleficence.",
    C: "Beneficence."
  },
  correctAnswer: "C",
  rationaleCorrect: "Beneficence means acting for the benefit of the patient. The physician’s aim is to treat the cancer, prevent complications, relieve suffering, and prolong the patient’s life.",
  rationalesIncorrect: {
    A: "Justice refers to fairness and equal treatment. It is important, but the action here is mainly about doing good for the patient.",
    B: "Non-maleficence means avoiding harm. Although treatment may have side effects, the physician’s main intention is to benefit the patient."
  }
},

// Question 147
{
  question: "A patient with schizophrenia says, “I can see demons in my room.” What is the best way for the nurse to document this?",
  options: {
    A: "States seeing “demons in my room.”",
    B: "Having distorted sensory perception.",
    C: "Experiencing hallucinations."
  },
  correctAnswer: "A",
  rationaleCorrect: "Nursing documentation should be objective and should record the patient’s exact words when possible. Writing the statement in quotation marks avoids interpretation and provides clear evidence of what the patient reported.",
  rationalesIncorrect: {
    B: "This is an interpretation rather than the patient’s exact statement.",
    C: "This may be clinically true, but documentation is stronger when the nurse records the patient’s exact words."
  }
},

// Question 148
{
  question: "A patient with schizophrenia becomes verbally aggressive toward staff because he believes they are planning to harm him. Which symptom commonly influences such behaviour?",
  options: {
    A: "Hallucinations.",
    B: "Depersonalization.",
    C: "Delusions."
  },
  correctAnswer: "C",
  rationaleCorrect: "Delusions are fixed false beliefs that are not based on reality. A patient who believes others are plotting against him may become suspicious, fearful, defensive, or aggressive. Paranoid delusions commonly influence behaviour in schizophrenia.",
  rationalesIncorrect: {
    A: "Hallucinations can influence behaviour, especially command hallucinations, but the belief that others are planning harm is more specifically a delusion.",
    B: "Depersonalization is a feeling of being detached from oneself. It does not best explain aggressive behaviour toward others."
  }
},

// Question 149
{
  question: "A severely asphyxiated newborn begins bleeding from puncture sites after resuscitation. Which medication should the neonatal nurse expect to administer first?",
  options: {
    A: "Injection phenylalanine 1 mg stat.",
    B: "Injection phytonadione 1 mg stat.",
    C: "Injection prothrombin 1 mg stat."
  },
  correctAnswer: "B",
  rationaleCorrect: "Phytonadione is vitamin K. It helps the liver produce clotting factors and is given to newborns to prevent or treat bleeding related to vitamin K deficiency. Bleeding from puncture sites in a newborn is a warning sign that clotting support is needed.",
  rationalesIncorrect: {
    A: "Phenylalanine is an amino acid, not a treatment for neonatal bleeding.",
    C: "Prothrombin is a clotting factor, but phytonadione is the correct medication commonly used to support clotting in newborns."
  }
},

// Question 150
{
  question: "A nurse observes tiny, flat, reddish-purple haemorrhagic spots on a patient’s skin. These spots are called:",
  options: {
    A: "Petechiae.",
    B: "Ecchymosis.",
    C: "Chloroma."
  },
  correctAnswer: "A",
  rationaleCorrect: "Petechiae are small, flat, non-raised bleeding spots under the skin. They may occur due to low platelet count, clotting problems, infection, trauma, or increased capillary fragility.",
  rationalesIncorrect: {
    B: "Ecchymosis refers to a larger area of bleeding under the skin, commonly called a bruise.",
    C: "Chloroma is a tumour-like collection of leukaemic cells and is not a small haemorrhagic skin spot."
  }
},

// Question 151
{
  question: "A speech-impaired patient is being forced to sign a surgical consent form even though he does not understand the procedure. The staff’s action is an example of:",
  options: {
    A: "Consertion.",
    B: "Conversion.",
    C: "Coercion."
  },
  correctAnswer: "C",
  rationaleCorrect: "Coercion occurs when a person is pressured, forced, or intimidated into making a decision. Consent is not valid if the patient does not understand the procedure or is forced to sign.",
  rationalesIncorrect: {
    A: "Consertion is not the correct ethical or legal term.",
    B: "Conversion refers to changing from one form or belief to another. It does not describe forcing consent."
  }
},

// Question 152
{
  question: "A student nurse slaps a patient during care. This act is best described as:",
  options: {
    A: "Assault.",
    B: "Battery.",
    C: "Slander."
  },
  correctAnswer: "B",
  rationaleCorrect: "Battery is intentional physical contact with another person without consent. Slapping a patient is direct harmful contact and is therefore battery.",
  rationalesIncorrect: {
    A: "Assault is a threat or attempt that makes someone fear harm. If physical contact actually occurs, it becomes battery.",
    C: "Slander is a false spoken statement that damages another person’s reputation."
  }
},

// Question 153
{
  question: "A student nurse physically slaps a patient on the ward. In legal terms, this may be classified as a:",
  options: {
    A: "Misdemeanour.",
    B: "Libel.",
    C: "Defamation."
  },
  correctAnswer: "A",
  rationaleCorrect: "A misdemeanour is a criminal offence that is generally less serious than a felony but still punishable by law. Slapping a patient is unlawful physical contact and may be treated as a criminal offence.",
  rationalesIncorrect: {
    B: "Libel is a false written statement that damages someone’s reputation.",
    C: "Defamation involves damaging someone’s reputation through false statements. Slapping is physical misconduct, not defamation."
  }
},

// Question 154
{
  question: "A student nurse finds that a medication expired two weeks ago. The pharmacist encourages her to administer it and promises her money if she agrees. She accepts. Which ethical theory best explains her decision?",
  options: {
    A: "Beneficence.",
    B: "Deontology.",
    C: "Utilitarianism."
  },
  correctAnswer: "C",
  rationaleCorrect: "Utilitarianism focuses on outcomes or consequences. In this case, the student nurse wrongly bases her decision on the expected benefit she will gain rather than on professional duty and patient safety. However, ethically, she should refuse to administer expired medication.",
  rationalesIncorrect: {
    A: "Beneficence means doing good for the patient. Giving expired medication does not promote the patient’s wellbeing.",
    B: "Deontology focuses on duty and rules. A deontological decision would require the student nurse to follow professional standards and refuse to give expired medication."
  }
},

// Question 155
{
  question: "A student nurse assesses a newly admitted patient with schizophrenia. Which affective changes are most likely to be observed? I. Blunted affect. II. Flat affect. III. Incongruous affect. IV. Ecstatic affect.",
  options: {
    A: "I, II and IV.",
    B: "I and IV.",
    C: "I, II and III."
  },
  correctAnswer: "C",
  rationaleCorrect: "Patients with schizophrenia may show reduced emotional expression, known as flat or blunted affect. They may also show incongruous affect, where their emotional expression does not match the situation or content of speech.",
  rationalesIncorrect: {
    A: "Blunted and flat affect are correct, but ecstatic affect is not a common expected finding in schizophrenia.",
    B: "This option leaves out flat and incongruous affect, which are more typical in schizophrenia."
  }
},

// Question 156
{
  question: "A child who had been dry at night suddenly begins bedwetting again. This sudden onset of enuresis may indicate:",
  options: {
    A: "Nephrotic syndrome.",
    B: "Emotional stress.",
    C: "Nephritis."
  },
  correctAnswer: "B",
  rationaleCorrect: "Sudden bedwetting in a child who was previously dry may be a sign of emotional stress, anxiety, fear, family conflict, school problems, abuse, or major life changes. The nurse should assess the child sensitively.",
  rationalesIncorrect: {
    A: "Nephrotic syndrome usually presents with oedema, proteinuria, and frothy urine, not sudden emotional regression.",
    C: "Nephritis may cause haematuria, hypertension, oedema, or reduced urine output, but sudden enuresis is more commonly linked with stress."
  }
},

// Question 157
{
  question: "A 3-year-old child accidentally ingests bleach. Which of the following is least expected?",
  options: {
    A: "Drooling.",
    B: "Anxiety.",
    C: "Cyanosis."
  },
  correctAnswer: "C",
  rationaleCorrect: "Bleach is a corrosive substance and may cause mouth and throat irritation, pain, drooling, vomiting, and distress. Cyanosis is not a typical early feature unless there is severe airway compromise or respiratory failure.",
  rationalesIncorrect: {
    A: "Drooling is expected because corrosive injury can make swallowing painful or difficult.",
    B: "Anxiety or restlessness is expected because the child may be frightened, distressed, and in pain."
  }
},

// Question 158
{
  question: "A toddler is admitted briefly to hospital and becomes angry, resistant, and tries to assert control over simple activities. This reaction is most likely due to:",
  options: {
    A: "Self-assertion and anger.",
    B: "Superficial relationship.",
    C: "Regression."
  },
  correctAnswer: "A",
  rationaleCorrect: "Toddlers value independence but still have limited understanding of illness and hospitalization. When hospitalized, they may feel a loss of control and respond with anger, negativism, resistance, and self-assertion.",
  rationalesIncorrect: {
    B: "Superficial relationship is not a typical toddler reaction to hospitalization.",
    C: "Regression can occur in hospitalized children, but the question specifically describes loss of control, anger, and self-assertion."
  }
},

// Question 159
{
  question: "A viral infection damages the motor cells in the anterior horn of the spinal cord, leading to weakness or paralysis. Which disease is this?",
  options: {
    A: "Poliomyelitis.",
    B: "Chickenpox.",
    C: "Rubella."
  },
  correctAnswer: "A",
  rationaleCorrect: "Poliomyelitis is a viral disease that affects the anterior horn cells of the spinal cord. Damage to these motor neurons can cause flaccid paralysis, muscle weakness, and long-term disability.",
  rationalesIncorrect: {
    B: "Chickenpox mainly causes fever and vesicular skin rash. It does not primarily attack anterior horn cells.",
    C: "Rubella causes mild fever and rash and is dangerous in pregnancy because it can affect the foetus, but it does not primarily damage spinal motor neurons."
  }
},

// Question 160
{
  question: "A woman at 5 weeks’ gestation reports severe nausea and vomiting in a previous pregnancy and wants early management. What is the first-line drug therapy?",
  options: {
    A: "Give intravenous fluids at 10 weeks’ gestation.",
    B: "Vitamin B6 plus doxylamine.",
    C: "Suppressive therapy with ondansetron."
  },
  correctAnswer: "B",
  rationaleCorrect: "Vitamin B6 with doxylamine is commonly used as first-line medication for nausea and vomiting in pregnancy. It is preferred early because it is effective and generally considered safe when used appropriately.",
  rationalesIncorrect: {
    A: "Intravenous fluids are used when there is dehydration or severe vomiting, but waiting until 10 weeks is not appropriate as first-line management.",
    C: "Ondansetron may be used in selected cases, but it is not usually the first-line option before vitamin B6 and doxylamine."
  }
},

// Question 161
{
  question: "A woman who cannot cook well tastes her friend’s food and then accuses the friend of being a poor cook. Which defence mechanism is she using?",
  options: {
    A: "Rationalization.",
    B: "Denial.",
    C: "Projection."
  },
  correctAnswer: "C",
  rationaleCorrect: "Projection occurs when a person attributes their own unacceptable weakness, feeling, or fault to someone else. The woman is shifting her own inadequacy in cooking onto her friend.",
  rationalesIncorrect: {
    A: "Rationalization means giving a socially acceptable excuse for behaviour.",
    B: "Denial means refusing to accept reality or facts."
  }
},

// Question 162
{
  question: "A factory worker is electrocuted while working on a machine. What type of occupational hazard is this?",
  options: {
    A: "Chemical.",
    B: "Physical.",
    C: "Biological."
  },
  correctAnswer: "B",
  rationaleCorrect: "Electrical injury is a physical hazard because it comes from a physical source of harm in the work environment. Other physical hazards include noise, radiation, heat, vibration, and machinery-related injuries.",
  rationalesIncorrect: {
    A: "Chemical hazards involve exposure to toxic substances, fumes, acids, or solvents.",
    C: "Biological hazards involve infectious agents such as bacteria, viruses, fungi, and parasites."
  }
},

// Question 163
{
  question: "A young man repeatedly steals items even when he does not need them and feels unable to resist the urge. This condition is most likely:",
  options: {
    A: "Homosexuality.",
    B: "Kleptomania.",
    C: "Fetishism."
  },
  correctAnswer: "B",
  rationaleCorrect: "Kleptomania is an impulse control disorder characterized by recurrent failure to resist the urge to steal items that are not needed for personal use or financial gain. The act is often driven by tension before stealing and relief afterward.",
  rationalesIncorrect: {
    A: "Homosexuality is not a disorder and is unrelated to stealing.",
    C: "Fetishism involves sexual arousal linked to non-living objects or specific body parts, not stealing."
  }
},

// Question 164
{
  question: "A nurse is invited to teach parents about common home accidents that cause injury and death among children aged 1–4 years. Which topic would be least suitable?",
  options: {
    A: "Sprains.",
    B: "Suffocation.",
    C: "Scalds."
  },
  correctAnswer: "A",
  rationaleCorrect: "Sprains can occur in children, but they are not among the major causes of death in children aged 1–4 years. Teaching should focus more on serious home accidents such as suffocation, burns, scalds, poisoning, falls, drowning, and choking.",
  rationalesIncorrect: {
    B: "Suffocation is a serious home accident risk in young children and should be discussed.",
    C: "Scalds from hot water, soup, tea, or porridge are common and important injuries in young children."
  }
},

// Question 165
{
  question: "According to mental health law, a lucid interval means the patient:",
  options: {
    A: "Is in his normal state of mind.",
    B: "Does not know the extent of his property.",
    C: "Has regained consciousness after ECT."
  },
  correctAnswer: "A",
  rationaleCorrect: "A lucid interval is a temporary period during which a person who may otherwise be mentally unwell becomes clear, rational, and capable of understanding and making decisions. During such a period, the person may be considered mentally competent.",
  rationalesIncorrect: {
    B: "Not knowing the extent of one’s property suggests impaired capacity, not lucidity.",
    C: "Regaining consciousness after ECT is recovery from anaesthesia or sedation, not a lucid interval in the legal sense."
  }
},

// Question 166
{
  question: "Acute or toxic confusional state is often reversible because:",
  options: {
    A: "Investigations are normally not necessary.",
    B: "Patients do not need immediate treatment.",
    C: "The cause of the condition can be removed or treated."
  },
  correctAnswer: "C",
  rationaleCorrect: "Acute confusional state, also called delirium, is often caused by treatable conditions such as infection, drug toxicity, dehydration, hypoxia, metabolic imbalance, or withdrawal states. When the cause is identified and treated, the confusion may improve.",
  rationalesIncorrect: {
    A: "Investigations are often needed to identify the underlying cause.",
    B: "Delirium can be serious and requires urgent assessment and management."
  }
},

// Question 167
{
  question: "A woman in labour is 6 cm dilated. Which actions will provide emotional support? I. Explain procedures and communicate findings to her. II. Allow her husband or chosen companion to stay and encourage her. III. Record all findings on the partograph because it is a legal document.",
  options: {
    A: "I and III.",
    B: "I and II.",
    C: "II and III."
  },
  correctAnswer: "B",
  rationaleCorrect: "Emotional support in labour includes clear communication, reassurance, explanation of procedures, and allowing a supportive companion where appropriate. These actions reduce fear and help the woman cooperate during labour.",
  rationalesIncorrect: {
    A: "Explaining procedures is supportive, but recording on the partograph is documentation, not emotional support.",
    C: "Allowing a companion is supportive, but partograph documentation does not directly provide emotional support."
  }
},

// Question 168
{
  question: "During adolescence, pubic, axillary, and facial hair begin to develop. Which hormone is mainly responsible for this hair growth?",
  options: {
    A: "Oestrogen.",
    B: "Testosterone.",
    C: "Androgen."
  },
  correctAnswer: "C",
  rationaleCorrect: "Androgens are responsible for the development of secondary sexual hair, including pubic and axillary hair. In males, testosterone is the main androgen, but the broader hormone group responsible is androgens.",
  rationalesIncorrect: {
    A: "Oestrogen is important in female sexual development, breast development, and menstrual regulation, but it is not the main hormone for pubic and axillary hair growth.",
    B: "Testosterone is an androgen and contributes to hair growth, especially in males, but the best general answer is androgen."
  }
},

// Question 169
{
  question: "Adolescents are often more likely to engage in risky behaviours. Which factor commonly contributes to this?",
  options: {
    A: "They become curious and daring.",
    B: "They tend to have voluntary and involuntary personal experience.",
    C: "There is conflict between cultural or parental expectation."
  },
  correctAnswer: "A",
  rationaleCorrect: "Adolescence is marked by curiosity, desire for independence, peer influence, experimentation, and a sense of invulnerability. These factors can make adolescents more likely to take risks without fully considering the consequences.",
  rationalesIncorrect: {
    B: "This statement is unclear and does not directly explain risk-taking.",
    C: "Conflict with cultural or parental expectations may contribute to stress, but curiosity and daring are more direct reasons for risk-taking behaviour."
  }
},

// Question 170
{
  question: "A client has many irrational thoughts and distorted beliefs. The goal of therapy is to modify her:",
  options: {
    A: "Cognition.",
    B: "Communication.",
    C: "Observation."
  },
  correctAnswer: "A",
  rationaleCorrect: "Cognition refers to thoughts, beliefs, interpretation, and perception. Therapy for irrational thoughts focuses on helping the client identify, challenge, and change distorted thinking patterns.",
  rationalesIncorrect: {
    B: "Communication may improve during therapy, but the main target is the client’s thinking pattern.",
    C: "Observation is a skill used by the nurse or therapist; it is not what is being modified in the client."
  }
},

// Question 171
{
  question: "After a urinary tract infection is confirmed, what advice should the nurse give the patient?",
  options: {
    A: "Pass urine frequently.",
    B: "Decrease fluid intake.",
    C: "Take plenty of oral fluids."
  },
  correctAnswer: "C",
  rationaleCorrect: "Adequate fluid intake helps flush bacteria from the urinary tract and supports urine production. The patient should also be advised to complete prescribed antibiotics and avoid delaying urination.",
  rationalesIncorrect: {
    A: "Passing urine frequently is helpful, but it is best achieved by increasing fluid intake.",
    B: "Decreasing fluid intake can worsen urinary stasis and make infection harder to clear."
  }
},

// Question 172
{
  question: "After giving medication to a patient, when should the nurse document it?",
  options: {
    A: "Within one hour.",
    B: "Before the end of shift.",
    C: "Immediately."
  },
  correctAnswer: "C",
  rationaleCorrect: "Medication should be recorded immediately after administration to prevent omissions, double dosing, and medication errors. Immediate documentation also provides accurate legal evidence of care given.",
  rationalesIncorrect: {
    A: "Delayed documentation increases the risk of forgetting or recording inaccurately.",
    B: "Waiting until the end of the shift is unsafe and may lead to medication errors."
  }
},

// Question 173
{
  question: "When is the best time to begin bonding between a newborn and the parents?",
  options: {
    A: "Twelve hours after delivery.",
    B: "During the first hour after delivery.",
    C: "Six hours after delivery."
  },
  correctAnswer: "B",
  rationaleCorrect: "The first hour after birth is an important period for bonding. Early skin-to-skin contact, breastfeeding initiation, eye contact, and parental touch help promote attachment, warmth, breastfeeding success, and emotional connection.",
  rationalesIncorrect: {
    A: "Waiting twelve hours delays bonding unnecessarily unless there is a medical emergency.",
    C: "Bonding can begin much earlier, preferably soon after birth."
  }
},

// Question 174
{
  question: "After assessment, the nurse identifies the following nursing diagnoses. Which order of priority is correct? I. Constipation. II. Ineffective airway clearance. III. Ineffective tissue perfusion.",
  options: {
    A: "III, II and I.",
    B: "I, III and II.",
    C: "II, III and I."
  },
  correctAnswer: "C",
  rationaleCorrect: "Priority is guided by the ABC approach: airway, breathing, and circulation. Ineffective airway clearance is the first priority because airway obstruction can quickly become life-threatening. Ineffective tissue perfusion comes next because it affects circulation. Constipation is important but less urgent.",
  rationalesIncorrect: {
    A: "Circulation is important, but airway takes priority over perfusion.",
    B: "Constipation should not come before airway or circulation problems."
  }
},

// Question 175
{
  question: "After delivery, the midwife sees a hole in the membranes with blood vessels running toward it, suggesting an accessory placental lobe was left behind. This is called placenta:",
  options: {
    A: "Circumvallata.",
    B: "Succenturiata.",
    C: "Accreta."
  },
  correctAnswer: "B",
  rationaleCorrect: "Placenta succenturiata has one or more accessory lobes connected to the main placenta by blood vessels. A hole in the membranes with vessels running to it may suggest an accessory lobe, which can be retained and cause postpartum haemorrhage or infection.",
  rationalesIncorrect: {
    A: "Circumvallate placenta has a raised ring around the placental edge due to folded membranes.",
    C: "Placenta accreta occurs when the placenta abnormally attaches deeply into the uterine wall."
  }
},

// Question 176
{
  question: "A small-for-gestational-age baby is wrapped in a wet cot sheet after delivery. The midwife explains that this causes heat loss mainly through:",
  options: {
    A: "Conduction and evaporation.",
    B: "Conduction and convection.",
    C: "Conduction and radiation."
  },
  correctAnswer: "A",
  rationaleCorrect: "A wet sheet causes heat loss by conduction because the baby’s body is in direct contact with a cold wet surface. It also causes evaporation because moisture on the sheet and skin evaporates, taking heat away from the baby.",
  rationalesIncorrect: {
    B: "Conduction is correct, but convection refers to heat loss through moving air, not the main effect of a wet cot sheet.",
    C: "Conduction is correct, but radiation is heat loss to nearby cooler objects without direct contact. A wet sheet mainly causes evaporation."
  }
},

// Question 177
{
  question: "A woman chooses the combined oral contraceptive pill and asks how it prevents pregnancy. Which explanation is correct? I. It stops ovulation. II. It thickens cervical mucus. III. It disrupts an existing pregnancy. IV. It blocks the fallopian tubes.",
  options: {
    A: "I and II.",
    B: "I and III.",
    C: "III and IV."
  },
  correctAnswer: "A",
  rationaleCorrect: "Combined oral contraceptive pills mainly prevent ovulation. They also thicken cervical mucus, making it difficult for sperm to pass through the cervix. They do not terminate an existing pregnancy.",
  rationalesIncorrect: {
    B: "Stopping ovulation is correct, but combined oral pills do not disrupt an existing pregnancy.",
    C: "The pill does not block the fallopian tubes and does not act by ending pregnancy."
  }
},

// Question 178
{
  question: "After the surgeon explains an operation, the nurse answers the patient’s questions and allows the patient to accept or refuse the surgery. Which ethical principle is being respected?",
  options: {
    A: "Autonomy.",
    B: "Non-maleficence.",
    C: "Truth telling."
  },
  correctAnswer: "A",
  rationaleCorrect: "Autonomy is the patient’s right to make decisions about their own healthcare. By giving information, answering questions, and allowing the patient to agree or refuse, the nurse supports the patient’s independent decision-making.",
  rationalesIncorrect: {
    B: "Non-maleficence means avoiding harm. It is important, but the focus here is the patient’s right to choose.",
    C: "Truth telling is part of informed consent, but the principle best described is autonomy."
  }
},

// Question 179
{
  question: "A patient has delayed wound healing after surgery. Which systemic factors may contribute to this delay? I. Limited supply for collagen synthesis. II. Low oxygen tension. III. Protein deficiency. IV. Vitamin deficiency.",
  options: {
    A: "I, II and IV.",
    B: "I, II, III and IV.",
    C: "I, III and III."
  },
  correctAnswer: "B",
  rationaleCorrect: "Wound healing requires oxygen, protein, vitamins, minerals, and collagen formation. Low oxygen tension reduces tissue repair. Protein deficiency reduces tissue building. Vitamin deficiency, especially vitamin C deficiency, can impair collagen synthesis. Therefore, all the listed factors can delay healing.",
  rationalesIncorrect: {
    A: "These are correct but incomplete because protein deficiency is also an important cause of delayed wound healing.",
    C: "This option is incorrectly structured and leaves out important factors."
  }
},

// Question 180
{
  question: "During history taking, a patient keeps repeating a word over and over. This symptom is called:",
  options: {
    A: "Echocardia.",
    B: "Echolalia.",
    C: "Echopraxia."
  },
  correctAnswer: "B",
  rationaleCorrect: "Echolalia is repetition of words or phrases. It may occur in psychiatric or neurological conditions and may be automatic or meaningless repetition.",
  rationalesIncorrect: {
    A: "Echocardia is not the correct term for repeated speech.",
    C: "Echopraxia is the imitation of another person’s movements or actions, not words."
  }
},

// Question 181
{
  question: "A child is admitted for skeletal traction after a fracture. The nurse explains to the mother that the main purpose of traction is to:",
  options: {
    A: "Make the bone grow faster.",
    B: "Prepare the area for surgery.",
    C: "Realign bone fragments."
  },
  correctAnswer: "C",
  rationaleCorrect: "Skeletal traction applies a steady pulling force to align fractured bone fragments, reduce muscle spasm, relieve pain, and maintain proper positioning during healing or before surgery.",
  rationalesIncorrect: {
    A: "Traction does not directly make the bone grow faster.",
    B: "Traction may sometimes be used before surgery, but its main purpose is alignment and immobilization."
  }
},

// Question 182
{
  question: "A woman recently discharged from a psychiatric hospital says her mother does not allow her to make decisions about her personal life. The nurse advises the mother to allow her some decision-making. This advice is based on:",
  options: {
    A: "Justice.",
    B: "Autonomy.",
    C: "Non-maleficence."
  },
  correctAnswer: "B",
  rationaleCorrect: "Autonomy means respecting a person’s right to make decisions about their own life and care, provided they have the capacity to do so. Mental illness does not automatically remove a person’s right to participate in decisions.",
  rationalesIncorrect: {
    A: "Justice means fairness and equal treatment. It is relevant, but the main issue is the patient’s right to make choices.",
    C: "Non-maleficence means avoiding harm. The nurse’s focus here is promoting independence and decision-making."
  }
},
];
