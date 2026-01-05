from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time

def test_pre_elicitation_flow():
    driver = webdriver.Chrome()
    driver.get("http://localhost:5173")

    # wait time to load (React needs time)
    wait = WebDriverWait(driver, 20)

    
    wait.until(
        EC.element_to_be_clickable((By.ID, "domain-healthcare"))
    ).click()

    
    answer_input = wait.until(
        EC.element_to_be_clickable((By.ID, "answer-healthcare-0"))
    )
    answer_input.send_keys("Derma clinic management system")
    time.sleep(2)
    answer_input = wait.until(
        EC.element_to_be_clickable((By.ID, "answer-healthcare-1"))
    )
    answer_input.send_keys("Doctors and patients")
    time.sleep(2)
    answer_input = wait.until(
        EC.element_to_be_clickable((By.ID, "answer-healthcare-2"))
    )
    answer_input.send_keys("yes")
    time.sleep(2)
    answer_input = wait.until(
        EC.element_to_be_clickable((By.ID, "answer-healthcare-3"))
    )
    answer_input.send_keys("Patients privacy")
    time.sleep(2)
    answer_input = wait.until(
        EC.element_to_be_clickable((By.ID, "answer-healthcare-4"))
    )
    answer_input.send_keys("No")

    time.sleep(2)

    answer_input.click()
    time.sleep(2)
    wait.until(
        EC.element_to_be_clickable((By.ID, "submit-btn"))
    ).click()

   
    time.sleep(3)
    driver.quit()
