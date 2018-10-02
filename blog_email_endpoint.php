<?php
//handle the contact form logic, everthing saved higher
require('../mp_email/leadEmail.php');

//error_reporting(E_ALL);
header('Content-Type: application/json');

$post_keys = array('title', 'company', 'phone','name','email');
$post_additional_keys = array('country','size','frequency','features');

if(isset($_POST)){

	$validate = true;
	foreach($post_keys as $field){
		if( !isset( $_POST[$field] ) && $field !== 'phone'){
			$validate = false;
		}
	}

	if(!$validate){
		echo json_encode( array( 'success' => false, 'message' => 'Error: missing fields') );
		exit;
	}
	$lead_title = $_POST['title'];
	$lead_company = $_POST['company'];
	$lead_email = $_POST['email'];
	$lead_name  = $_POST['name'];
	$country_code = '';
	if($_POST['country']){
		$country_code = $_POST['country']['dialCode'];
	}
	$lead_phone = '+' . $country_code . ' ' .  $_POST['phone'];

	$other_fields = array();
	foreach( $post_additional_keys as $add_key ){
		if(!empty( $_POST[ $add_key ] ) ){
			if('features' === $add_key){
				foreach($_POST[$add_key] as $feature_key => $feature_val){
					if(!empty($feature_val)){
						$other_fields[ $feature_key ] = $feature_val;
					}
				}
			}else{
				$other_fields[ $add_key ] = $_POST[ $add_key ];
			}
		}
	}

	$support_email = 'info@meetingpulse.net';  //,david@meetingpulse.net';

	$country = '';
	if($other_fields['country']){
//		$country = $other_fields['country'];
	}

	//try sending
	if( mpSendEmails($lead_title, $lead_company, $lead_name, $lead_email, $lead_phone, $support_email, $other_fields ) ){
		echo json_encode( array('success' => true, 'message' => 'Success: Contacted' ) );
	}else{
		echo json_encode( array('success' => false, 'message' => 'Failure sending emails' ) );
	}

}else{
	echo json_encode( array('success' => false, 'message' => 'POST MISSING' ) );
}

exit;
?>
