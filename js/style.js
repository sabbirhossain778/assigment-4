function showOnly(id, clickedButton){
  const allJobs = document.getElementById('jobs-card');
  const interviewSection = document.getElementById('interview-section');
  const rejectedSection = document.getElementById('rejected-section');
  //hide all
  allJobs.classList.add('hidden');
  interviewSection.classList.add('hidden');
  rejectedSection.classList.add('hidden');
  //show id wala element
  const selected = document.getElementById(id);
  selected.classList.remove('hidden');

  const buttons = document.querySelectorAll('#btn-options .tab'); 
  for (const btn of buttons) {
        btn.classList.remove('btn-primary', 'tab-active');
    }

  clickedButton.classList.add('btn-primary', 'tab-active');
}


    function moveCard(button, targetSectionId) {
        const card = button.closest('.card');
        const targetSection = document.getElementById(targetSectionId);
        if (card && targetSection) {
            targetSection.appendChild(card);
            refreshUIStatus();
        }
    }
    //delete card
    function deleteCard(button) {
        const card = button.closest('.card');
        if (card) {
            card.remove();
            refreshUIStatus();
        }
    }

    function refreshUIStatus() {
        const sectionIds = ['jobs-card', 'interview-section', 'rejected-section'];
        let totalInterview = 0;
        let totalRejected = 0;

        for (const id of sectionIds) {
            const section = document.getElementById(id);
            if (!section) {
                continue; 
            }
            const cards = section.querySelectorAll('.card');
            const count = cards.length;
            if (id === 'jobs-card') {
                totalAll = count;
            } else if (id === 'interview-section') {
                totalInterview = count;
            } else if (id === 'rejected-section') {
                totalRejected = count;
            }
        }
        updateHeaderCount(totalAll, totalInterview, totalRejected);
    }

    // set header count
    function updateHeaderCount(all, interview, rejected) {    
        const interviewEl = document.getElementById('count-interview');
        if(interviewEl) interviewEl.innerText = interview;

        const rejectedEl = document.getElementById('count-rejected');
        if(rejectedEl) rejectedEl.innerText = rejected;
    }
    window.onload = refreshUIStatus;
