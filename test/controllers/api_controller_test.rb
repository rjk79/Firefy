require 'test_helper'

class ApiControllerTest < ActionDispatch::IntegrationTest
  test "should get users" do
    get api_users_url
    assert_response :success
  end

end
