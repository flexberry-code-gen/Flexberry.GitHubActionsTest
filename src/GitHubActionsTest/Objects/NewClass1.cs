﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.GitHubActionsTest
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    //  *** Start programmer edit section *** (Using statements)

    //  *** End programmer edit section *** (Using statements)


    /// <summary>
    /// New class1.
    /// </summary>
    //  *** Start programmer edit section *** (NewClass1 CustomAttributes)

    //  *** End programmer edit section *** (NewClass1 CustomAttributes)
    [AutoAltered()]
    [Caption("New class1")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("NewClass1E", new string[] {
            "a as \'A\'"})]
    [View("NewClass1L", new string[] {
            "a as \'A\'"})]
    public class NewClass1 : ICSSoft.STORMNET.DataObject
    {
        
        private string fa;
        
        //  *** Start programmer edit section *** (NewClass1 CustomMembers)

        //  *** End programmer edit section *** (NewClass1 CustomMembers)

        
        /// <summary>
        /// a.
        /// </summary>
        //  *** Start programmer edit section *** (NewClass1.a CustomAttributes)

        //  *** End programmer edit section *** (NewClass1.a CustomAttributes)
        [StrLen(255)]
        public virtual string a
        {
            get
            {
                //  *** Start programmer edit section *** (NewClass1.a Get start)

                //  *** End programmer edit section *** (NewClass1.a Get start)
                string result = this.fa;
                //  *** Start programmer edit section *** (NewClass1.a Get end)

                //  *** End programmer edit section *** (NewClass1.a Get end)
                return result;
            }
            set
            {
                //  *** Start programmer edit section *** (NewClass1.a Set start)

                //  *** End programmer edit section *** (NewClass1.a Set start)
                this.fa = value;
                //  *** Start programmer edit section *** (NewClass1.a Set end)

                //  *** End programmer edit section *** (NewClass1.a Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "NewClass1E" view.
            /// </summary>
            public static ICSSoft.STORMNET.View NewClass1E
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("NewClass1E", typeof(IIS.GitHubActionsTest.NewClass1));
                }
            }
            
            /// <summary>
            /// "NewClass1L" view.
            /// </summary>
            public static ICSSoft.STORMNET.View NewClass1L
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("NewClass1L", typeof(IIS.GitHubActionsTest.NewClass1));
                }
            }
        }
    }
}