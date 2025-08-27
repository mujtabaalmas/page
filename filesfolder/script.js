
      (function(){
      emailjs.init("651vFbQxXTrAJ_56a");
      })();
      const hireMeBtn = document.getElementById("hireMeBtn");
      const modal = document.getElementById("hireMeModal");
      const closeModal = document.querySelector(".close");

      hireMeBtn.onclick = () => modal.style.display = "block";
      closeModal.onclick = () => modal.style.display = "none";
      window.onclick = (e) => { if(e.target == modal) modal.style.display = "none"; };

      document.getElementById("hireMeForm").addEventListener("submit", function(e) {
      e.preventDefault();

      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const subject = document.getElementById("subject").value;
      const body = document.getElementById("body").value;

      emailjs.send("service_6frc1gf", "template_26piixl", {

      name: name,        
      email: email,
      title: subject,
      message: body

      }).then(function(response) {
      document.getElementById("formStatus").innerHTML = "<p style='margin-left: 4rem;color:green;'>✅ Email sent successfully!</p>";
      document.getElementById("hireMeForm").reset();
     setTimeout(()=>{ modal.style.display = "none"; }, 1000); // auto close
    }, function(error) {
        document.getElementById("formStatus").innerHTML =
          "<p style='color:red;'>❌ Failed to send. Try again later.</p>";
    });
});

    document.getElementById('year').textContent = new Date().getFullYear();

    function downloadCV(){

      const link = document.createElement('a');
      link.href = './filesfolder/resume.pdf';
      link.download = 'mujtaba_almas_CV.pdf';
      link.click();
    }
