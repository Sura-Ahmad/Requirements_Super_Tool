from selenium import webdriver
from selenium.webdriver.common.by import By

# NEW: explicit wait imports
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time

def test_pre_elicitation_flow():
    driver = webdriver.Chrome()
    driver.get("http://localhost:5173")

    # NEW: explicit wait (React needs time)
    wait = WebDriverWait(driver, 20)

    # select domain
    wait.until(
        EC.element_to_be_clickable((By.ID, "domain-healthcare"))
    ).click()

    # NEW: wait until answer input is CLICKABLE (not just present)
    answer_input = wait.until(
        EC.element_to_be_clickable((By.ID, "answer-healthcare-0"))
    )

    time.sleep(2)

    # NEW: force focus before typing
    answer_input.click()
    time.sleep(2)
    answer_input.send_keys("Doctors")

    # wait until submit button is clickable
    wait.until(
        EC.element_to_be_clickable((By.ID, "submit-btn"))
    ).click()

   
    time.sleep(3)
    # NEW: close browser after test
    driver.quit()
